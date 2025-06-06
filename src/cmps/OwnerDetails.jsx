export function OwnerDetails({ owner, starSvg, isLarge }) {
    return (
        <>
            <div className="owner-details flex align-center gap1rem">
                <img className={`owner-img ${isLarge ? 'large' : ''}`} src={owner.imgUrl} alt="owner image" />
                <div className="owner-info flex column">
                    <div className="name-and-level flex align-center">
                        <h3>{owner.fullname}</h3>
                        <span className="level">Level {owner.level}</span>
                    </div>
                    <div className="rate flex align-center">
                        <div className="stars flex">
                            <span className="star">{starSvg}</span>
                            <span className="star">{starSvg}</span>
                            <span className="star">{starSvg}</span>
                            <span className="star">{starSvg}</span>
                            <span className="star">{starSvg}</span>
                        </div>
                        <span className="rating">{owner.rate}</span>
                    </div>
                </div>
            </div>
            {
                isLarge && <div className="owner-description">
                    <ul className="desciption-list">
                        <li>
                            <label>From</label>
                            <strong>{owner.loc}</strong>
                        </li>
                        <li>
                            <label>Member since</label>
                            <strong>{owner.memberSince}</strong>
                        </li>
                        <li>
                            <label>Avg. response time</label>
                            <strong>1 hour</strong>
                        </li>
                        <li>
                            <label>Last delivery</label>
                            <strong>about 3 hours</strong>
                        </li>
                        <li>
                            <label>Languages</label>
                            <strong>{owner.languages}</strong>
                        </li>
                    </ul>
                </div>}</>
    )
}