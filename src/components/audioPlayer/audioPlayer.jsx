import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import rewind_icon from "../../images/Icon material-fast-rewind.svg";
import forward_icon from "../../images/Icon material-fast-forward.svg";
import volume_icon from "../../images/volume_down_black_24dp.svg";
import close_icon from "../../images/close_black_24dp.svg";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from "@mui/icons-material/Replay10";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
export default function AudioPlayer(props) {
  const { showRowDetail, setShowRowDetail, dataProp, loading } = props;

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [volume, setVolume] = useState(0);

  const [isRewindPressed, setIsRewindPressed] = useState(false);
  const [isFastForwardPressed, setIsFastForwardPressed] = useState(false);

  const [isMute, setIsMute] = useState(false);

  const [error, setError] = useState(false);

  const errorOccured = (e) => {};

  const play = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const secondsToHms = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    const mDisplay = `${m < 10 ? "0" : ""}${m}`;
    const sDisplay = `${s < 10 ? "0" : ""}${Math.floor(s)}`;

    return `${mDisplay}:${sDisplay}`;
  };

  useEffect(() => {
    fetch(dataProp?.play_audio_conversation)
      .then((res) => res.text())
      .then((html) => {
        // use a regular expression to match the src attribute value
        const regex = /src="([^"]+)"/;
        const match = regex.exec(html);
        if (match) {
          let link = match[1]; // this is the src link

          let decoded = link.replace(/&amp;/g, "&");

          setSrc(decoded);
        }
      })
      .catch((err) => console.error(err));

    const interval = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setVolume(audioRef.current.volume);
        setPlaying(!audioRef.current.paused); // set playing state

        if (
          audioRef.current.duration !== "NaN" &&
          audioRef.current.duration !== "Inf"
        ) {
          setTotalTime(audioRef.current.duration);
        } else {
          setTotalTime(0);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seekAudio = (e) => {
    const val = parseFloat(e.target.value);
    const seekTo = (parseFloat(audioRef.current.duration) * val) / 100;

    audioRef.current.currentTime = seekTo;
    setCurrentTime(seekTo);

    audioRef.current.play();
    setPlaying(true);
  };

  const changeVolume = (e) => {
    const volumePercentage = e.target.value / 100;

    if (volumePercentage === 0) {
      clickAudioIcon();
    } else {
      audioRef.current.volume = volumePercentage;

      if (isMute) {
        setIsMute(!isMute);
      }

      setVolume(volumePercentage);
    }
  };

  const clickAudioIcon = () => {
    if (isMute) {
      audioRef.current.volume = isMute;
      setVolume(isMute);
      setIsMute(false);
    } else {
      setIsMute(audioRef.current.volume);
      setVolume(0);
      audioRef.current.volume = 0;
    }
  };

  const startRewind = () => {
    const intervalId = setInterval(() => {
      if (currentTime > 0) {
        audioRef.current.currentTime = audioRef.current.currentTime - 1;
        setCurrentTime(audioRef.current.currentTime);

        audioRef.current.play();
        setPlaying(true);
      }
    }, 100);
    setIsRewindPressed(intervalId);
  };

  const stopRewind = () => {
    clearInterval(isRewindPressed);
    setIsRewindPressed(false);
  };

  const startFastForward = () => {
    const intervalId = setInterval(() => {
      if (currentTime < totalTime) {
        audioRef.current.currentTime = audioRef.current.currentTime + 1;
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 100);
    setIsFastForwardPressed(intervalId);
  };

  const stopFastForward = () => {
    clearInterval(isFastForwardPressed);
    setIsFastForwardPressed(false);
  };

  const [src, setSrc] = useState("");

  const formateDate = (date_i) => {
    let date = new Date(date_i);
    let options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="flex w-full px-10  h-20  bg-white  darkBackgroundMain shadow-xl rounded-lg shadow-black/5 ring-1 ring-slate-700/10">
        <>
          <div className="flex flex-col mr-3  justify-center pl-10 ">
            <p>{formateDate(dataProp.date)}</p>
          </div>
          <div className="flex flex-col  justify-center">
            <div className="h-4 w-0.5 bg-gray-400"></div>
          </div>
          <div className="flex flex-col  ml-3 justify-center">
            {dataProp.time}
          </div>
          <div
            className="flex flex-col  justify-center ml-10 hover:cursor-pointer hover:opacity-60 "
            onMouseDown={(e) => startRewind()}
            onMouseUp={(e) => stopRewind()}
            onMouseLeave={(e) => stopRewind()}
          >
            <Replay10Icon />
          </div>
          <div className="flex flex-col justify-center ml-5">
            <FontAwesomeIcon
              size="2x"
              icon={playing ? faPause : faPlay}
              onClick={play}
              className="hover:cursor-pointer hover:opacity-60 "
            />
          </div>

          <div
            className="flex flex-col justify-center hover:cursor-pointer hover:opacity-60 ml-5"
            onMouseDown={(e) => startFastForward()}
            onMouseUp={(e) => stopFastForward()}
            onMouseLeave={(e) => stopFastForward()}
          >
            <Forward10Icon />
            {/* <img
              src={forward_icon}
              alt="Fast Forward"
              className="hover:cursor-pointer bg-black text-black hover:opacity-60 h-8 w-8"
            /> */}
          </div>
          <div className="flex flex-col  justify-center px-2 mx-2 ">
            <div className="flex gap-3">
              <div className="w-14  text-right">
                <p className="text-[#4ED5FF]">{secondsToHms(currentTime)}</p>
              </div>
              <div className="w-3 text-center ">
                <p>/</p>
              </div>
              <div className="w-14 text-left">
                <p>
                  {loading
                    ? "00:00"
                    : secondsToHms(totalTime) === "NaN:NaN"
                    ? "00:00"
                    : secondsToHms(totalTime)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center ml-3 pl-2 w-5/12">
            <input
              className="w-full  accent-[#4ED5FF] hover:cursor-grab hover:opacity-60"
              type="range"
              min={0}
              max={100}
              onChange={(e) => seekAudio(e)}
              value={totalTime > 0 ? (currentTime / totalTime) * 100 : 0}
            />
          </div>
          <div
            className=" flex flex-col  justify-center  ml-10  mr-3  "
            onClick={(e) => clickAudioIcon()}
          >
            {isMute ? (
              <VolumeOffIcon />
            ) : volume <= 0.5 ? (
              <VolumeDownIcon />
            ) : (
              <VolumeUpIcon />
            )}
            {/* {isMute ? <VolumeOffIcon /> : <VolumeUpIcon />} */}
          </div>

          {/* <div className="flex flex-col  justify-center ">
            <img
              src={volume_icon}
              alt="Volume Control"
              className={`hover:cursor-pointer hover:opacity-60  ${
                !volume ? "opacity-25" : ""
              }  `}
            />
          </div> */}

          <div className="flex flex-col  justify-center  w-28 pr-3">
            <input
              className="w-full accent-[#4ED5FF] text-white hover:cursor-grab hover:opacity-60"
              type="range"
              min={0}
              max={100}
              value={volume * 100}
              onChange={(e) => changeVolume(e)}
            />
          </div>
        </>
        {/* )} */}
      </div>
      <audio
        ref={audioRef}
        src={src}
        onError={(e) => errorOccured(e)}
        autoPlay={false}
      />
    </>
  );
}
