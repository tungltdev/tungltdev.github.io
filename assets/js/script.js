function createElm(tag = '', klass = '', inner = '') {
    const elm = document.createElement(tag);
    elm.className = klass;
    elm.innerHTML = inner;
    return elm;
}
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const section = document.querySelector('section');

    var s2t = createElm('button', 'scroll-top', `<svg fill="#8590a6"
viewBox="0 0 24 24" width="24" height="24">
<path d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996
0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33
4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58
1.415h-3.004v7.005z"/></svg>`);

    s2t.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
    };

    window.onscroll = function () {
            if (document.body.scrollTop > 100 ||
                    document.documentElement.scrollTop > 100) {
                    s2t.style.display = "block";
            } else {
                    s2t.style.display = "none";
            }
    };

    section.appendChild(s2t);
});