import React, { useState, useEffect } from 'react'
import './MoveToTop.css'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function MoveToTop(props) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", function (e) {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    });
    function handleScroll() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div className="move-to-top" style={{ display: visible && !props.open ? "flex" : "none" }} onClick={handleScroll}>
            <KeyboardArrowUpIcon fontSize="large" />
        </div>
    )
}
export default MoveToTop