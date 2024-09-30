import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../../store/services/URL";
import axios from "axios";
import withAPIKeys from "../../store/services/service";

import CloseIcon from "@mui/icons-material/Close";

const CoachingComments = (props) => {
  const popupRefs = useRef([]);
  const commentsTabletRef = useRef(null);
  const commentRefs = useRef([]);
  const [comments, setComments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [openPopupId, setOpenPopupId] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editCommentId, setEditCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  useEffect(() => {
    const commentsTablet = commentsTabletRef.current;
    const observer = new MutationObserver(() => {
      commentsTablet.scrollTop = commentsTablet.scrollHeight;
    });

    observer.observe(commentsTablet, { childList: true });
    const handleClickOutside = (event) => {
      popupRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target)) {
          handleClosePopup(index);
        }
      });
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      observer.disconnect();
    };
  }, []);

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return date.toLocaleString("en-US", options);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const fetchComments = (conversationId) => {
    axios
      .get(
        `${BASE_URL}call-analytics/get_coaching_comments?conversation_id=${conversationId}`
      )
      .then((res) => {
        setComments(res.data);
      });
  };

  useEffect(() => {
    if (props.conversationId) {
      fetchComments(props.conversationId);
    }
  }, [props.conversationId]);

  const handleCommentUpdate = (id, message) => {
    setEditMode(false);
    setEditCommentId(null);
    setEditedComment("");
    axios
      .put(`${BASE_URL}call-analytics/update_coaching_comment`, {
        user_email: user.user_email,
        conversation_id: props.conversationId,
        message_id: id,
        message: message
      })
      .then((res) => {
        fetchComments(props.conversationId);
      });
  };

  const handleCommentSubmit = () => {
    const data = {
      user_email: user.user_email,
      user_name: user.name,
      conversation_id: props.conversationId,
      message: newComment
    };
    axios
      .post(`${BASE_URL}call-analytics/add_coaching_comment`, data)
      .then(() => {
        setNewComment("");
        fetchComments(props.conversationId);
      });
  };

  const handleDelete = (id) => {
    axios
      .post(
        `${BASE_URL}call-analytics/delete_coaching_comment`,
        {
          user_email: user.user_email,
          conversation_id: props.conversationId,
          message_id: id
        },
        {
          headers: withAPIKeys().headers
        }
      )
      .then(() => {
        fetchComments(props.conversationId);
      });
  };

  const handleEdit = (id, message, index) => {
    setEditMode(true);
    setEditCommentId(id);
    setEditedComment(message);

    commentRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  const handleIconClick = (index) => {
    setOpenPopupId(index);
  };

  const handleClosePopup = (index) => {
    setOpenPopupId((prevOpenPopupId) =>
      prevOpenPopupId === index ? null : prevOpenPopupId
    );
  };

  return (
    <div className="absolute right-3 bottom-10 z-20 flex flex-col w-[430px] h-[575px] rounded-md bg-white shadow-lg shadow-slate-400">
      <div className="modal-header flex justify-between px-6 py-5 bg-black text-white rounded-t-md">
        <h2>Coaching Comments</h2>
        <button className="close-button" onClick={props.onClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="h-[350px] flex flex-col justify-between gap-4">
        <div
          className=" overflow-y-scroll flex flex-col "
          ref={commentsTabletRef}
        >
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                ref={(ref) => (commentRefs.current[index] = ref)}
                key={index}
                className="border-b-2 py-2 px-6"
              >
                <div className="relative flex justify-between items-baseline">
                  <div className="font-bold">{comment.user_name}</div>
                  {comment.user_name === user.name && !editMode && (
                    <FontAwesomeIcon
                      ref={(ref) => (popupRefs.current[index] = ref)}
                      size="1x"
                      icon={faEllipsis}
                      className="hover:cursor-pointer hover:opacity-60"
                      onClick={() => handleIconClick(index)}
                    />
                  )}
                  {openPopupId === index && (
                    <div
                      className="absolute top-0 right-4 mt-1 bg-white border border-gray-100 p-2 rounded-md z-50 shadow-lg flex flex-col gap-1"
                      onBlur={() => handleClosePopup(index)}
                      tabIndex="0"
                    >
                      <div
                        className="flex flex-row justify-between items-center gap-2 py-1 px-4 rounded hover:bg-[#EDEFF1] cursor-pointer"
                        onClick={() => handleDelete(comment.message_id)}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-[#d03939] "
                          size="sm"
                        />
                        <span className="text-[#d03939]">Delete</span>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center gap-2 py-1 px-4 rounded hover:bg-[#EDEFF1] cursor-pointer"
                        onClick={() => {
                          handleEdit(
                            comment.message_id,
                            comment.message,
                            index
                          );
                          handleClosePopup(index);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faPen}
                          className="text-[#888888] "
                          size="sm"
                        />
                        <span>Edit</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="comment-date flex justify-start gap-1 text-[#888888] mt-2">
                  <div className="comment-date text-sm">
                    {convertTimestamp(comment.timestamp)}
                  </div>
                </div>
                <div className="comment-text text-sm mt-2">
                  {editMode && editCommentId === comment.message_id ? (
                    <textarea
                      className="comment-input w-full border-2 border-[#707070] rounded-md p-2 bg-[#F9F9F9]"
                      value={editedComment}
                      onChange={(e) => setEditedComment(e.target.value)}
                      rows={3}
                    />
                  ) : (
                    comment.message
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center py-4 ">
              <p>Your comments will appear Here</p>
            </div>
          )}
        </div>
      </div>

      {editMode ? (
        <div className="flex flex-row justify-between px-6 pb-2 gap-4 pt-10 bg-white">
          <button
            className="comment-button text-sm px-5 py-3 bg-[#0E2E60] rounded-md text-white"
            onClick={() => handleCommentUpdate(editCommentId, editedComment)}
          >
            Save
          </button>
          <button
            className="comment-button text-sm px-5 py-3 bg-[#0E2E60] rounded-md text-white"
            onClick={() => {
              setEditMode(false);
              setEditCommentId(null);
              setEditedComment("");
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className=" items-start  w-full px-6 pb-2 gap-4 pt-10 bg-white">
          <textarea
            className="comment-input w-full border-2 border-[#707070] rounded-md p-2 bg-[#F9F9F9]"
            placeholder="Enter your comment..."
            value={newComment}
            onChange={handleCommentChange}
            rows={3}
          />
          <button
            className="comment-button text-sm px-5 py-3 bg-[#0E2E60] rounded-md text-white"
            onClick={handleCommentSubmit}
          >
            Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default CoachingComments;
