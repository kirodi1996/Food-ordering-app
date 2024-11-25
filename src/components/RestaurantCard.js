const RestaurantCard = (props) => {
    const {resData} = props;
    const {id} = resData?.info
    const resName = resData?.info?.name;
    const cuisines = resData?.info?.cuisines.join(',');
    const avgRating = resData?.info?.avgRating;
    const cloudinaryImageId = resData?.info?.cloudinaryImageId;
    return (
        <div key={id} className='w-36 h-auto border '>
            <img alt="res" className='w-10'
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}
            />
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
};

export default RestaurantCard;