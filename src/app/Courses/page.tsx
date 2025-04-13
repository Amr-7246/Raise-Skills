import Header from "./Components/Header";
import Video from "./Components/Video";
import CourseMaterials from "./Components/CourseMaterials";
import CourseTopics from "./Components/CourseTopics";
import Comments from "./Components/Comments";
import PopUpTemplate from "./Components/PopUp/PopUpTemplate";
import GlobalNavBar from "../Ai/components/GlobalNavBar";

export default function Home() {
return (
<div className='!bg-white'>
    <GlobalNavBar/>
    <Header/>
    <div className = ' container ' >
        <Video/>
        <CourseMaterials/>
        <CourseTopics/>
        <Comments/>
    </div>
        <PopUpTemplate/>
</div>
);
}
