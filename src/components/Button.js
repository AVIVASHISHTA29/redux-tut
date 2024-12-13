import React from "react";

function Button({ title, onClick, style, icon }) {
    return (
        <div className="my-btn" onClick={onClick} style={style}>
            {icon}{title}
        </div>
    );
}

function BulletPoint({ title, icon }) {
    return <span className="bullet-point">{icon} {title}</span>;
}

function IconWrapper(Component, type) {
    return (props) => {
        if (type === "search") {
            return <Component {...props} icon={"🔍"} />;
        } else if (type === "save") {
            return <Component {...props} icon={"💾"} />;
        } else if (type === "delete") {
            return <Component {...props} icon={"🗑️"} />;
        } else if (type === "star") {
            return <Component {...props} icon={"⭐"} />;
        } else if (type === "rocket") {
            return <Component {...props} icon={"🚀"} />;
        }
        return <Component {...props} />;
    }
}

const SearchButton = IconWrapper(Button, "search");
const SaveButton = IconWrapper(Button, "save");
const DeleteButton = IconWrapper(Button, "delete");


const StarBulletPoint = IconWrapper(BulletPoint, "star");
const RocketBulletPoint = IconWrapper(BulletPoint, "rocket");

export { Button, DeleteButton, RocketBulletPoint, SaveButton, SearchButton, StarBulletPoint };

