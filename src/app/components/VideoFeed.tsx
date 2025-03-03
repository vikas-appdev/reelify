import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";


interface VideoFeedProps {
    videos: IVideo[];
}

export default function VideoFeed({videos}: VideoFeedProps){
    return (
        <div>
            {
                videos.map((video)=> <VideoComponent key={video._id?.toString()} video={video}  />)
            }
            {
                videos.length === 0 && (
                    <div>
                        <p>No videos found</p>
                    </div>
                )
            }
        </div>
    )
}