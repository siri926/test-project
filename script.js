function showContent(task) {
    let content = "";

    if (task === "task1") {
        content = "This is the content for Task 1.";
    }
    else if (task === "task2") {
        content = "Here is the information for Task 2.";
    }
    else if (task === "task3") {
        content = "Details for Task 3 are shown here.";
    }

    document.getElementById("taskContent").innerText = content;
}