const ViewCourse = ({courses}) => {
    var viewCourse = 
        courses.map((course, index) => (
            <div key={index}>My course is : {course}</div>
        ));
    return (
        <div>
            {viewCourse}
            {courses.length > 0 && <div>You have {courses.length} courses</div>}
        </div>
    );
};

export default ViewCourse;
