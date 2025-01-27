/* eslint-disable react/prop-types */

const MentorCard = ({ mentor }) => {
  return (
    <div className="max-w-xs mx-auto flex bg-background shadow-sm shadow-text text-text rounded-lg overflow-hidden mb-4">
      {/* {mentor.profilePicture && (
        // <img
        //   src={`data:image/jpeg;base64,${}`}
        //   alt={mentor.userId.firstName}
        //   className="w-full h-64 object-cover"
        // />
      )} */}
      <div className="w-20 rounded-full p-2 flex justify-center items-center ml-3 mt-7 h-12 bg-primary">{mentor.userId.firstName[0]}{mentor.userId.lastName[0]}</div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">{mentor.userId.firstName} {mentor.userId.lastName}</h2>
        <p className="text-lg text-primary/70">{mentor.jobTitle}</p>
        <p className="text-md mt-2">{mentor.bio}</p>
        <p className="text-md mt-2 text-text/80 font-thin">{mentor.expertise}</p>
        <p className="text-md text-text/80 font-thin">{mentor.experience} of experience</p>
      </div>
    </div>
  );
};

export default MentorCard;
