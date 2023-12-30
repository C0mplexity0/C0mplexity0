const cursor = document.getElementById("cursor");

window.addEventListener("mousemove", function(event) {
    cursor.animate(
        [
            {
                left: event.clientX + "px",
                top: event.clientY + "px"
            },
        ],
        {
            // timing options
            duration: 200,
            fill: "forwards"
        },
    );
});

function enlargeCursor() {
    cursor.dataset.type = "big";
}

function shrinkCursor() {
    cursor.dataset.type = "small";
}
