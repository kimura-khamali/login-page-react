const UserCard = ({image,fullName}) => {
    return(
        <div>
        <img src={image} alt={`${fullName} Profile`}/>
        <h2>{fullName}</h2>
        </div>
    )
}

export default UserCard;