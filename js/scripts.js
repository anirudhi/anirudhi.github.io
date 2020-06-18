const browserPrefix = '';
const container = document.getElementsByClassName('container');

function getCssValuePrefix(pref)
{
    var rtrnVal = '';//default to standard syntax
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    // Create a temporary DOM object for testing
    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++)
    {
        // Attempt to set the style
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        // Detect if the style was successfully set
        if (dom.style.background)
        {
            rtrnVal = prefixes[i];
        }
    }

    dom = null;
    delete dom;

    pref = rtrnVal;
}

function triggerLoad() {
    getCssValuePrefix(browserPrefix);
}

function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}

function paintContainer(x1, y1) {
    let orientation = angle(x1, y1, window.innerWidth / 2, window.innerHeight / 2);
    let colorOne = '#6699ff';
    let colorTwo = '#ba0e3e';

    container[0].style.backgroundImage = 'linear-gradient('
        + orientation + 'deg' + ', ' + colorOne + ', ' + colorTwo + ')';
}

document.onmousemove = (e) => {
    const { screenX, screenY } = e
    console.log('mousemove')
    paintContainer(screenX, screenY)
}