const route = window.location.href;

if (route === "https://tinytweaks.github.io/") window.location.href = "https://tinytweaks.vercel.app/";
else {
    const url = window.location.href;
    const param = url.split("/")[3];

    window.location.href = `https://${param}.tinytweaks.vercel.app/`;
}
