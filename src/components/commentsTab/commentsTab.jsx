import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../store/services/URL";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress
} from "@mui/material";
import withAPIKeys from "../../store/services/service";

import MainLoaderSmall from "../mainLoader/mainLoaderSmall";

function CommentsTab(props) {
  const { ID } = props;
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [loading, setLoader] = useState(false);

  const [mainLoader, setMainLoader] = useState(false);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [commentID, setCommentID] = useState();

  const handleDelete = (id) => {
    setDeleteConfirmationOpen(true);
    setCommentID(id);
  };

  const handleDeleteConfirmed = () => {
    setDeleteConfirmationOpen(false);
    axios
      .post(
        `${BASE_URL}call-analytics/delete_coaching_comment`,
        {
          user_email: user.user_email,
          conversation_id: ID,
          message_id: commentID
        },
        {
          headers: withAPIKeys().headers
        }
      )
      .then((res) => {
        setComments(res.data.comments);
      });
  };

  const handleDeleteCancelled = () => {
    setDeleteConfirmationOpen(false);
    setCommentID(null);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const headers = withAPIKeys().headers;
    if (editCommentId !== null) {
      setLoader(true); // Start loader
      const editedComment = comments.find(
        (comment) => comment.message_id === editCommentId
      );
      if (editedComment) {
        const data = {
          user_email: user.user_email,
          user_name: user.name,
          conversation_id: ID,
          message_id: editCommentId,
          message: newComment
        };

        axios
          .put(
            `${BASE_URL}call-analytics/update_coaching_comment`,
            data,
            { headers: headers } // Pass headers as an object
          )
          .then((res) => {
            setNewComment("");
            setEditCommentId(null);
            setComments(res.data.comments);
          })
          .finally(() => setLoader(false)); // Stop loader
      }
    } else {
      setLoader(true); // Start loader

      const data = {
        user_email: user.user_email,
        user_name: user.name,
        conversation_id: ID,
        message: newComment
      };

      axios
        .post(`${BASE_URL}call-analytics/add_coaching_comment`, data, {
          headers: headers // Pass headers as an object
        })
        .then((res) => {
          setNewComment("");
          setComments(res.data.comments);
        })
        .finally(() => setLoader(false)); // Stop loader
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleEditClick = (commentId) => {
    setEditCommentId(commentId);
    const editedComment = comments.find(
      (comment) => comment.message_id === commentId
    );
    if (editedComment) {
      setNewComment(editedComment.message);
    }
  };

  const handleCancelEdit = () => {
    setEditCommentId(null);
    setNewComment("");
  };

  const fetchComments = (conversationId) => {
    setMainLoader(true);
    // Assuming withAPIKeys().headers returns the necessary headers
    const headers = withAPIKeys().headers;

    axios
      .get(
        `${BASE_URL}call-analytics/get_coaching_comments?conversation_id=${conversationId}`,
        { headers: headers }
      )
      .then((res) => {
        setComments(res.data);
        setMainLoader(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
        setMainLoader(false); // Set loader state to false in case of error
      });
  };

  useEffect(() => {
    fetchComments(ID);
  }, [ID]);

  function formatDate(inputDate) {
    const date = new Date(inputDate);

    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    };

    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion ({comments.length})
            </h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                onChange={handleCommentChange}
                value={newComment}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleCommentSubmit}
              disabled={loading} // Disable the button when loading
              className="inline-flex bg-blue-900 items-center py-2 bg-blue-950.5 px-5 text-xs font-medium w-32 text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              {loading ? (
                <>
                  {" Sending..."}
                  <CircularProgress size={20} color="inherit" />
                </>
              ) : editCommentId !== null ? (
                "Save Comment"
              ) : (
                "Post Comment"
              )}
            </button>
            {editCommentId !== null && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="inline-flex ml-2 items-center py-2 px-4 text-xs font-medium text-center text-gray-500 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50"
              >
                Cancel Edit
              </button>
            )}
          </form>
          {mainLoader && <MainLoaderSmall />}
          {comments.map((comment, index) => (
            <article
              key={comment.message_id}
              className="relative p-6 text-base bg-white rounded-lg dark:bg-gray-900"
            >
              <div className="flex justify-between items-center mb-2 relative">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    {comment.user_avatar ? (
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src={comment.user_avatar}
                        alt={comment.user_name}
                      />
                    ) : (
                      <span className="mr-2 w-6 h-6 flex items-center justify-center text-gray-500 bg-gray-200 rounded-full">
                        {comment.user_name[0].toUpperCase()}
                      </span>
                    )}
                    {comment.user_name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate datetime={comment.timestamp}>
                      {formatDate(comment.timestamp)}
                    </time>
                  </p>
                </div>
                {editCommentId !== comment.message_id ? (
                  <>
                    <DeleteOutlineIcon
                      onClick={() => handleDelete(comment.message_id)}
                      className="absolute right-8 
                  top-0 inline-flex items-center p-1
                  text-sm font-medium text-center
                  text-gray-500 dark:text-gray-400
                  bg-white rounded-lg hover:bg-gray-100
                  focus:ring-4 focus:outline-none focus:ring-gray-50
                  dark:bg-gray-900 dark:hover:bg-gray-700
                  dark:focus:ring-gray-600 cursor-pointer"
                    />
                    <EditIcon
                      onClick={() => handleEditClick(comment.message_id)}
                      className="absolute right-0 
                    top-0 inline-flex items-center p-1
                    text-sm font-medium text-center
                    text-gray-500 dark:text-gray-400
                    bg-white rounded-lg hover:bg-gray-100
                    focus:ring-4 focus:outline-none focus:ring-gray-50
                    dark:bg-gray-900 dark:hover:bg-gray-700
                    dark:focus:ring-gray-600 cursor-pointer"
                    />
                  </>
                ) : (
                  <>
                    <ClearIcon
                      onClick={handleCancelEdit}
                      className="absolute right-8 
                  top-0 inline-flex items-center p-1
                  text-sm font-medium text-center
                  text-gray-500 dark:text-gray-400
                  bg-white rounded-lg hover:bg-gray-100
                  focus:ring-4 focus:outline-none focus:ring-gray-50
                  dark:bg-gray-900 dark:hover:bg-gray-700
                  dark:focus:ring-gray-600 cursor-pointer"
                    />
                    <SaveIcon
                      onClick={handleCommentSubmit} // Note: Removed arrow function
                      className="absolute right-0 
                    top-0 inline-flex items-center p-1
                    text-sm font-medium text-center
                    text-gray-500 dark:text-gray-400
                    bg-white rounded-lg hover:bg-gray-100
                    focus:ring-4 focus:outline-none focus:ring-gray-50
                    dark:bg-gray-900 dark:hover:bg-gray-700
                    dark:focus:ring-gray-600 cursor-pointer"
                    />
                  </>
                )}
              </div>

              {/* Dropdown menu */}
              {editCommentId !== comment.message_id ? (
                // <p className="text-gray-500 dark:text-gray-400">
                //   {comment.message}
                // </p>
                <textarea
                  type="text"
                  disabled
                  value={comment.message}
                  style={{
                    resize: "none"
                  }}
                  // onChange={handleCommentChange}
                  className="px-2 w-full rounded-lg p-2  bg-transparent text-sm text-gray-900 "
                />
              ) : (
                <textarea
                  type="text"
                  value={newComment}
                  onChange={handleCommentChange}
                  className="px-2 w-full border-2 rounded-lg p-2 text-sm text-gray-900  focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Edit your comment..."
                />
              )}
            </article>
          ))}
        </div>
      </section>
      <Dialog
        open={deleteConfirmationOpen}
        onClose={handleDeleteCancelled}
        aria-labelledby="delete-confirmation-dialog-title"
      >
        <DialogTitle id="delete-confirmation-dialog-title">
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          Are you sure you want to delete this comment?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancelled} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirmed} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>{" "}
    </div>
  );
}

export default CommentsTab;
