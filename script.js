const buttons = document.querySelectorAll(".menu-button");

buttons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 18;
        const rotateX = (centerY - y) / 18;

        button.style.setProperty("--rotateX", `${rotateX}deg`);
        button.style.setProperty("--rotateY", `${rotateY}deg`);
    });

    button.addEventListener("mouseleave", () => {
        button.style.setProperty("--rotateX", "0deg");
        button.style.setProperty("--rotateY", "0deg");
    });
});

/* =========================
   HONORS PAGE DRAWER LOGIC
   ========================= */

const honorTabs = document.querySelectorAll(".honor-tab");
const honorDrawer = document.getElementById("honorsDrawer");
const drawerPanels = document.querySelectorAll(".drawer-panel");

if (honorTabs.length && honorDrawer && drawerPanels.length) {
    honorTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetId = tab.dataset.target;
            const targetPanel = document.getElementById(targetId);

            if (!targetPanel) return;

            // 左侧按钮高亮切换
            honorTabs.forEach((btn) => btn.classList.remove("active"));
            tab.classList.add("active");

            // 右侧抽屉先收起
            honorDrawer.classList.remove("show");

            // 等收起一点后再切换内容并展开
            setTimeout(() => {
                drawerPanels.forEach((panel) => panel.classList.remove("active"));
                targetPanel.classList.add("active");

                honorDrawer.classList.add("show");
            }, 180);
        });
    });
}