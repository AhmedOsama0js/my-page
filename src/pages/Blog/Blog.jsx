import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Blog.css";

export default function Blog() {
  const [data, setData] = useState([]);
  const [videos, setVideos] = useState([]);

  const API_KEY = "AIzaSyAeOQfCk8X7ArY06UrB-gIp9YNHewLLBRM";
  const CHANNEL_ID = "UCHVjI8B4cRJ50oiwt03zBdg";

  const API_URL_Chanel = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&key=${API_KEY}`;

  const API_URL_playlist = (PLAYLIST_ID) =>
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=20&key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL_Chanel);
        setData(response?.data?.items || []);

        const firstPlaylistId = response?.data?.items[0]?.id;
        if (firstPlaylistId) {
          const videosResponse = await axios.get(
            API_URL_playlist(firstPlaylistId)
          );
          setVideos(videosResponse?.data?.items || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // خاليه

  const handlerClick = async (id) => {
    try {
      const response = await axios.get(API_URL_playlist(id));
      setVideos(response?.data?.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-blog">
      <div className="blog-btns mb-4">
        {data.map((a) => (
          <button
            className="btn btn-danger btn-blog"
            style={{ margin: "5px" }}
            onClick={() => handlerClick(a.id)}
            key={a.id}
          >
            {a.snippet.title}
          </button>
        ))}
      </div>
      <div className="container">
        <div className="row video-container">
          {videos.map((video) => (
            <div key={video?.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ width: "100%" }}>
                <iframe
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "8px",
                  }}
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                  title={video.snippet.title}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
