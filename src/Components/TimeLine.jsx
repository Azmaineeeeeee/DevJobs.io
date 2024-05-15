import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUser, FaRegNewspaper, FaSearch, FaFileAlt } from 'react-icons/fa';
const TimeLine = () => {
  return (
    <div>
         
      

          <VerticalTimeline layout="1-column">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#0056b3", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #0056b3" }}
        iconStyle={{ background: "#0056b3", color: "#fff" }}
        icon={<FaUser />}
      >
        <h3 className="vertical-timeline-element-title">Login</h3>
        <p>
          Users log in to access the platform's features, including job postings and tech blogs.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#009688", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #009688" }}
        iconStyle={{ background: "#009688", color: "#fff" }}
        icon={<FaFileAlt />}
      >
        <h3 className="vertical-timeline-element-title">Job Posting</h3>
        <p>
          Hiring managers post job listings, specifying job titles, descriptions, and requirements.
        </p>
        <p>
          Job postings include details such as salary, location, and application deadline.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#673ab7", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #673ab7" }}
        iconStyle={{ background: "#673ab7", color: "#fff" }}
        icon={<FaSearch />}
      >
        <h3 className="vertical-timeline-element-title">Job Search</h3>
        <p>
          Job seekers explore available positions, filter by category, location, and experience level.
        </p>
        <p>
          They can save favorite jobs, track applications, and receive notifications for new listings.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#ff5722", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #ff5722" }}
        iconStyle={{ background: "#ff5722", color: "#fff" }}
        icon={<FaRegNewspaper />}
      >
        <h3 className="vertical-timeline-element-title">Tech Blogs</h3>
        <p>
          Users read informative tech blogs, articles, and industry news to stay updated with the latest trends.
        </p>
        <p>
          Blogs cover topics such as coding tutorials, career advice, and product reviews.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
