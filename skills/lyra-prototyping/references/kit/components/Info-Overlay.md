# Info Overlay (real react markup, Lyra theme)

Stylesheets to load after `base.css`: `css/Button.css`, `css/Icon.css`, `css/InfoOverlay.css`, `css/Tooltip.css`.
Component classes: `sol-button`, `sol-container-icon`, `sol-icon`, `sol-icon-host`, `sol-info-overlay`, `sol-screenreader-only`.

This is the markup Storybook renders, class names included. Copy it as is. Do not restyle it and do not rename its classes: the classes are how the audit recognizes a real component.

## Examples / Cannot Load

Usage:
```tsx
({
  iconType,
  autoResize,
  message
}) => {
  const [divWidth, setDivWidth] = useState('100%');
  const [divHeight, setDivHeight] = useState('100%');
  const wrapperStyle: CSSProperties = {
    height: divHeight,
    width: divWidth,
    border: '1px solid black',
    transition: 'width 0.6s ease-in-out, height 0.6s ease-in-out'
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Info overlay preset</h1>
      </header>
      <main style={{
      height: '500px'
    }} role="main">
        <div style={wrapperStyle}>
          <SOLInfoOverlay autoResize={autoResize} iconType={iconType} iconConfiguration={message ? {
          message
        } : undefined} />
          <SOLButton className="widthToggle" onButtonClick={() => setDivWidth(prev => prev === '25%' ? '100%' : '25%')}>
            Change Width
          </SOLButton>
          <SOLButton className="heightToggle" onButtonClick={() => setDivHeight(prev => prev === '35%' ? '100%' : '35%')}>
            Change Height
          </SOLButton>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Info overlay preset</h1></header><main role="main" style="height: 500px;"><div style="height: 100%; width: 100%; border: 1px solid black; transition: width 0.6s ease-in-out, height 0.6s ease-in-out;"><div class="sol-info-overlay"><div class="sol-container-icon" id="large"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="240" height="109" fill="none"><path opacity=".1" d="M192.084 108.447s25.385-29.563 7.585-57.14c-6.642-10.29-23.6-16.069-39.185-11.381-9.207 2.769-23.17 2.36-36.813-22.047-18.605-33.285-95.84-18.15-80.765 40.167 6.35 24.564-17.319 25.682-5.595 50.454l154.773-.053z" fill="#005cb9"></path><path d="M.5 107.5h239c.133 0 .26.053.354.146s.146.221.146.354-.053.26-.146.354-.221.146-.354.146H.5c-.133 0-.26-.053-.354-.146a.5.5 0 0 1 0-.708c.094-.093.221-.146.354-.146h0z" fill="#5b7c8c"></path><path d="M177 9.5H80v70h97v-70z" fill="#000" fill-opacity=".1"></path><path d="M175 5.5H79v64h96v-64z" fill="#fff"></path><path d="M178 8.409a1.1 1.1 0 0 1-1.1 1.091H77.11a1.1 1.1 0 0 1-1.1-1.091V4.593a1.1 1.1 0 0 1 1.1-1.091h99.79a1.1 1.1 0 0 1 1.1 1.091v3.816zM135.199 73.5h-17.4a1.7 1.7 0 0 1-1.8-1.577V69.5h1.413v2.423c.006.097.051.187.124.251s.167.096.264.09h17.4a.37.37 0 0 0 .389-.341v-2.422h1.41v2.422a1.7 1.7 0 0 1-1.8 1.577z" fill="#151131"></path><path d="M73.626 29.997s-6.919 7.144-7.252 9.837 3.292 6.908 3.292 6.908l3.96-16.745z" fill="#e04338"></path><path d="M76.585 104.103s.235 3.8.97 3.852a679.35 679.35 0 0 0 3.727.007l4.632-.027c-.034-.352-.192-.681-.445-.929a1.5 1.5 0 0 0-.939-.423c-1.354-.236-3.62-1.188-4.441-2.977-.863-1.883-3.504.497-3.504.497zm-10.318 0s.235 3.8.97 3.852a679.06 679.06 0 0 0 3.726.007l4.646-.016a1.53 1.53 0 0 0-.455-.934 1.54 1.54 0 0 0-.945-.429c-1.354-.236-3.62-1.188-4.44-2.977-.861-1.883-3.502.497-3.502.497z" fill="#163560"></path><path d="M81.715 63.375s-1.212 7.749-5.731 21.5-5.136 19.711-5.136 19.711a19.93 19.93 0 0 1-2.513.177c-.785-.047-1.565-.151-2.335-.313 0 0-.041-15.032 2.042-21.949s.45-24.936.45-24.936l13.223 5.81z" fill="#142d40"></path><path d="M84.074 57.995c-.014 8.704-.631 17.396-1.849 26.014-2.021 14.337-1.336 20.422-1.336 20.422s-1.663.3-2.247.317c-.625.021-2.591-.157-2.591-.157s-2.891-14.342-2.062-21.518-3.96-24.624-3.96-24.624l14.045-.454z" fill="#1e4d71"></path><path d="M74.708 30.667l2.282 1.69 3.3-.694-.461-2.677-.035-.2L79.477 27l-3.08-1.535-1.149-.572c0 .02.089 1.066.1 1.219.149 1.547-.071 3.108-.64 4.555z" fill="#eeb399"></path><path d="M80.058 29.819c-.073-.031-4.487-1.333-4.966-1.175s-.764 1.086-.764 1.086l7.22 1.633a3.59 3.59 0 0 0-1.49-1.544z" fill="#f2564b"></path><path d="M68.17 59.438c.748 3.413 13.2 3.818 16.411.72.365-.353.383-2 .246-4.212-.27-4.328-1.134-10.84-1.168-14.166a26.37 26.37 0 0 0-.532-4.742 38.52 38.52 0 0 0-1.579-5.675s-6.083-1.966-7.221-1.632c-5.479 1.607-6.905 26.294-6.157 29.707z" fill="#fb7369"></path><path d="M84.826 55.946c-.27-4.328-1.134-10.84-1.168-14.166a26.29 26.29 0 0 0-.531-4.742l-3.659-.646s-3.577 14.612 5.358 19.554z" fill="#e04338"></path><path d="M82.846 49.913a.86.86 0 0 0 .274 1 1.67 1.67 0 0 1 .744 1.523c-.12.474-1.269 1.247-1.667 1.123s-1.209-.749-1.121-1-.545-2.194.426-2.942c.093-.106.212-.185.346-.23s.277-.051.414-.021.264.097.367.193.178.218.217.353z" fill="#f1c2ad"></path><path d="M78.754 30.487s3.569.668 6.412 4.858 4.714 7.305 4.19 8.816-5.3 6.748-6.121 6.748c-.546.009-1.076-.185-1.487-.545s-.674-.858-.739-1.401c0 0 3.361-5.038 2.7-5.792-.283-.323-4.364-3.635-4.947-2.139-.965 2.475-.008-10.546-.008-10.546z" fill="#fb7369"></path><path d="M75.578 26.166c.677 1.294 3.2 2.414 4.248 2.825l-.035-.2-.317-1.786-3.081-1.535c-.68-.009-1.094.163-.815.696z" fill="#000" fill-opacity=".24"></path><path d="M80.846 27.841s-6.701.743-7.1-3.438-1.532-6.899 2.731-7.551 5.245.865 5.717 2.232.385 8.456-1.349 8.756z" fill="#eeb399"></path><path d="M81.78 18.816s-1.305 4.551-2.223 4.163-1.758-.705-1.89.718.888 3.293-2.115 2.965-5.765-5.508-4.216-9.563c3.144-3.702 14.812-2.696 10.444 1.717z" fill="#233862"></path><path d="M124 48.5a3 3 0 0 1 .506-1.667c.329-.493.798-.878 1.346-1.105a3 3 0 0 1 3.269.65 2.99 2.99 0 0 1 .821 1.536 3 3 0 0 1-1.275 3.08c-.494.33-1.074.506-1.667.506a3 3 0 0 1-3-3h0zm0-10v-8a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a3 3 0 0 1-3 3 3 3 0 0 1-3-3h0z" fill="#ff6969"></path></svg></div><div class="under-line-text large" role="alert" aria-live="assertive"> Cannot load data </div></div><button type="button" class="sol-button btn-primary-large widthToggle"><span class="projected-content">Change Width</span></button><button type="button" class="sol-button btn-primary-large heightToggle"><span class="projected-content">Change Height</span></button></div></main>
```

## Examples / Loading Items

Usage:
```tsx
({
  iconType,
  autoResize,
  message
}) => {
  const [divWidth, setDivWidth] = useState('100%');
  const [divHeight, setDivHeight] = useState('100%');
  const wrapperStyle: CSSProperties = {
    height: divHeight,
    width: divWidth,
    border: '1px solid black',
    transition: 'width 0.6s ease-in-out, height 0.6s ease-in-out'
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Info overlay preset</h1>
      </header>
      <main style={{
      height: '500px'
    }} role="main">
        <div style={wrapperStyle}>
          <SOLInfoOverlay autoResize={autoResize} iconType={iconType} iconConfiguration={message ? {
          message
        } : undefined} />
          <SOLButton className="widthToggle" onButtonClick={() => setDivWidth(prev => prev === '25%' ? '100%' : '25%')}>
            Change Width
          </SOLButton>
          <SOLButton className="heightToggle" onButtonClick={() => setDivHeight(prev => prev === '35%' ? '100%' : '35%')}>
            Change Height
          </SOLButton>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Info overlay preset</h1></header><main role="main" style="height: 500px;"><div style="height: 100%; width: 100%; border: 1px solid black; transition: width 0.6s ease-in-out, height 0.6s ease-in-out;"><div class="sol-info-overlay"><div class="sol-container-icon" id="large"><svg aria-hidden="true" width="160" height="115" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g clip-path="url(#a)"><path opacity=".1" d="M133.355 97.956c21.488-14.1 35.741-29.364 19.886-52.163-5.916-8.508-21.021-13.285-34.905-9.409-8.2 2.289-20.639 1.952-32.792-18.227C68.971-9.36 3.34 10.971 10.975 36.384c7.574 30.239-19.87 36.8-7.913 58.247 20.325 34.825 108.805 17.422 130.293 3.325Z" fill="#005CB9"></path><path d="M120.073 50.38a5.87 5.87 0 0 0-2.911-5.14 5.864 5.864 0 1 0-5.777 10.207v6.806a2.825 2.825 0 0 0 5.647 0v-6.806a5.787 5.787 0 0 0 3.041-5.067Z" fill="#572200" opacity=".85" style="mix-blend-mode: multiply;"></path><path d="M114.385 62.253v-6.806a5.777 5.777 0 0 1 1.324-10.69 5.775 5.775 0 0 1 3.72 8.255 5.777 5.777 0 0 1-2.396 2.435v6.806a2.794 2.794 0 0 1-1.324 2.372 2.797 2.797 0 0 1-1.324-2.372Z" fill="#000" fill-opacity=".59"></path><path fill="url(#b)" d="M30 0h100v100H30z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h160v115H0z"></path></clipPath><pattern id="b" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#c" transform="scale(.00195)"></use></pattern><image id="c" width="512" height="512" xlink:href="data:image/png;base64,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
```

## Examples / No Created

Usage:
```tsx
({
  iconType,
  autoResize,
  message
}) => {
  const [divWidth, setDivWidth] = useState('100%');
  const [divHeight, setDivHeight] = useState('100%');
  const wrapperStyle: CSSProperties = {
    height: divHeight,
    width: divWidth,
    border: '1px solid black',
    transition: 'width 0.6s ease-in-out, height 0.6s ease-in-out'
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Info overlay preset</h1>
      </header>
      <main style={{
      height: '500px'
    }} role="main">
        <div style={wrapperStyle}>
          <SOLInfoOverlay autoResize={autoResize} iconType={iconType} iconConfiguration={message ? {
          message
        } : undefined} />
          <SOLButton className="widthToggle" onButtonClick={() => setDivWidth(prev => prev === '25%' ? '100%' : '25%')}>
            Change Width
          </SOLButton>
          <SOLButton className="heightToggle" onButtonClick={() => setDivHeight(prev => prev === '35%' ? '100%' : '35%')}>
            Change Height
          </SOLButton>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Info overlay preset</h1></header><main role="main" style="height: 500px;"><div style="height: 100%; width: 100%; border: 1px solid black; transition: width 0.6s ease-in-out, height 0.6s ease-in-out;"><div class="sol-info-overlay"><div class="sol-container-icon" id="large"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="240" height="109" fill="none"><path opacity=".1" d="M192.084 108.447s25.385-29.563 7.585-57.14c-6.642-10.29-23.6-16.069-39.185-11.381-9.207 2.769-23.17 2.36-36.813-22.047-18.605-33.285-95.84-18.15-80.765 40.167 6.35 24.564-17.319 25.682-5.595 50.454l154.773-.053z" fill="#005cb9"></path><path d="M.5 107.5h239c.133 0 .26.053.354.146s.146.221.146.354-.053.26-.146.354-.221.146-.354.146H.5c-.133 0-.26-.053-.354-.146a.5.5 0 0 1 0-.708c.094-.093.221-.146.354-.146h0z" fill="#5b7c8c"></path><path d="M86.142 107.442c.068.029.139.048.212.059h8.666a1.49 1.49 0 0 0-.517-.773c-.25-.196-.557-.307-.874-.317-1.369-.222-3.742-1.018-4.272-2.768l-.045-.174c-.419-1.872-3.476.573-3.476.573l-.023.2c-.069.683-.252 2.909.329 3.2zm-10.04 0c.068.029.139.048.212.059h8.666a1.49 1.49 0 0 0-.517-.773c-.25-.196-.557-.307-.874-.317-1.26-.2-3.369-.895-4.111-2.368a2.49 2.49 0 0 1-.206-.574c-.42-1.872-3.477.573-3.477.573l-.034.328c-.081.797-.208 2.798.341 3.072z" fill="#233862"></path><path d="M80.302 56.568l1.758 29.2a.55.55 0 0 0 .012.113c-.002.113.002.226.012.339a83.95 83.95 0 0 0 .753 6.175v.025l.151.866a102.32 102.32 0 0 0 2.423 10.882c.739.222 1.521.263 2.279.119a4.8 4.8 0 0 0 2.076-.947s.615-6.113.766-9.941c.088-2.2.979-13.82 1.72-23.271.552-6.966.766-12.778.766-12.778l-12.716-.782z" fill="#1e4d71"></path><path d="M80.302 56.568l1.758 29.2a.55.55 0 0 0 .012.113l.765 6.515v.025l.151.866 9.264-23.158c.552-6.966.766-12.778.766-12.778l-12.716-.783z" fill="#000" fill-opacity=".36"></path><path d="M92.169 56.217s-5.907 17.893-9.012 29c-1.798 6.09-2.834 12.379-3.086 18.723 0 0-4.848.922-5.282.1 0 0-1.436-21.577 1.49-26.874 1.653-2.993 2.786-11.331 2.436-14.121s-.636-8.381-.636-8.381l14.09 1.553z" fill="#1e4d71"></path><path d="M92.721 28.954s3.979 4.9 7.38 5.335a7.74 7.74 0 0 0-1.255-2.561l.6-.9 1.218-2.109-1.506-3.037-.917-1.858c-.466 1.221-1.205 2.319-2.162 3.208s-2.106 1.547-3.358 1.922z" fill="#eeb399"></path><path d="M100.59 64.945l.039 1.066c.278.168.515.397.691.669a2.13 2.13 0 0 1 .329.905c.039.323.005.65-.101.957a2.14 2.14 0 0 1-.51.816s-.761.8-1.234.22-.184-.416-.874-1.219c-.33-.303-.543-.713-.602-1.158s.041-.896.281-1.275l.2-.819 1.781-.162z" fill="#ab7041"></path><path d="M99.525 65.915a9.24 9.24 0 0 0 1.852-1.029l-2.542-10.409c-.126-.926 1.75-14.009 1.75-14.009l-7.78-5.65s.417 18.029.781 20.369c.6 3.868 4.441 10.969 4.441 10.969a3.88 3.88 0 0 0 1.498-.241z" fill="#3f88be"></path><path d="M78.295 55.854a22.36 22.36 0 0 0 5.7 4.933c2.61 1.556 5.958 3.043 7.167 2.786.58-.119 1.13-.35 1.621-.68a54.03 54.03 0 0 1 2.445-6.738 4.41 4.41 0 0 0 .213-.515l.038-.063 2.209-5.184c1.417-3.216 2.559-6.546 3.414-9.954.396-2.239.102-4.546-.841-6.615l-.6-1.381c-1.19-.259-2.256-.914-3.025-1.858-.9-1.117-1.909-2.386-2.185-2.336-2.912.628-6.137 4.533-8.773 9.679a33.23 33.23 0 0 0-.992 2.021 50.67 50.67 0 0 0-1.066 2.535 85.24 85.24 0 0 1-4.481 9.477l-.627 1.142-.792 1.494c-.166.328.337.993.575 1.257z" fill="#66b4ed"></path><path d="M79.131 51.863c7.933-2.372 11.711-15.175 11.711-15.175l-2.561-1.18s-1.08.916-2.611 2.322c-.351.653-.677 1.331-.992 2.021-.376.828-.728 1.67-1.066 2.535a85.1 85.1 0 0 1-4.481 9.477z" fill="#000" fill-opacity=".3"></path><path d="M83.852 48.378l.279 1.029a2.14 2.14 0 0 1 1.35 1.302 2.14 2.14 0 0 1-.194 1.866s-.561.951-1.153.494-.273-.364-1.127-.99c-.391-.221-.692-.573-.85-.993s-.162-.883-.013-1.307l.014-.844 1.694-.557z" fill="#eeb399"></path><path d="M83.395 50.399c.284-.111.537-.288.74-.516s.348-.5.424-.795c0 0-2.518-9.911-1.686-10.336s10.778-1.887 10.778-1.887 2.989-.631 2.892-3.338c.023-.967-.149-1.928-.508-2.826s-.895-1.714-1.578-2.399c0 0-15.195 5.673-16.485 7.66-1.937 2.982 3.686 14.342 3.686 14.342a2.21 2.21 0 0 0 1.737.095z" fill="#66b4ed"></path><path d="M97.383 25.715s.326 3.728 2.058 5.108l1.218-2.109-1.506-3.037-1.77.038z" fill="#000" fill-opacity=".17"></path><path d="M102.354 29.056s-6.233-1.709-5.109-5.574 1.076-6.689 5.1-5.761 4.368 2.626 4.306 4.007-2.647 7.672-4.297 7.328z" fill="#eeb399"></path><path d="M97.247 24.563a7.08 7.08 0 0 1 8.731-3.425c2.219.717 2.32.109 3.89-1.816 0 0-4.036-2.9-7.441-3.646-7.146-1.568-5.503 7.783-5.18 8.887z" fill="#233862"></path><path d="M99 107.5a3 3 0 0 1-3-3v-35H82l14-18h60.269L168 69.5h-12v35c0 .796-.316 1.559-.879 2.121s-1.325.879-2.121.879H99z" fill="#dec380"></path><g fill="#000"><path d="M96 51.5h11v56h-8a3 3 0 0 1-3-3v-53z" fill-opacity=".12"></path><path opacity=".5" d="M107 51.521L118.648 76.5h37.337v-6.98l-37.342.006L107 51.521z"></path><path d="M96 51.498l-14 18h14v-18z" fill-opacity=".49"></path></g><path d="M107 51.498l11.731 18H168l-11.731-18H107z" fill="#fff" fill-opacity=".25"></path></svg></div><div class="under-line-text large" role="alert" aria-live="assertive"> No items created yet </div></div><button type="button" class="sol-button btn-primary-large widthToggle"><span class="projected-content">Change Width</span></button><button type="button" class="sol-button btn-primary-large heightToggle"><span class="projected-content">Change Height</span></button></div></main>
```

## Examples / No Permission

Usage:
```tsx
({
  iconType,
  autoResize,
  message
}) => {
  const [divWidth, setDivWidth] = useState('100%');
  const [divHeight, setDivHeight] = useState('100%');
  const wrapperStyle: CSSProperties = {
    height: divHeight,
    width: divWidth,
    border: '1px solid black',
    transition: 'width 0.6s ease-in-out, height 0.6s ease-in-out'
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Info overlay preset</h1>
      </header>
      <main style={{
      height: '500px'
    }} role="main">
        <div style={wrapperStyle}>
          <SOLInfoOverlay autoResize={autoResize} iconType={iconType} iconConfiguration={message ? {
          message
        } : undefined} />
          <SOLButton className="widthToggle" onButtonClick={() => setDivWidth(prev => prev === '25%' ? '100%' : '25%')}>
            Change Width
          </SOLButton>
          <SOLButton className="heightToggle" onButtonClick={() => setDivHeight(prev => prev === '35%' ? '100%' : '35%')}>
            Change Height
          </SOLButton>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Info overlay preset</h1></header><main role="main" style="height: 500px;"><div style="height: 100%; width: 100%; border: 1px solid black; transition: width 0.6s ease-in-out, height 0.6s ease-in-out;"><div class="sol-info-overlay"><div class="sol-container-icon" id="large"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="160" height="115" fill="none"><path opacity=".1" d="M133.355 97.956c21.488-14.1 35.741-29.364 19.886-52.163-5.916-8.508-21.021-13.285-34.905-9.409-8.2 2.289-20.639 1.952-32.792-18.227C68.971-9.361 3.339 10.971 10.975 36.384c7.574 30.239-19.871 36.8-7.913 58.247 20.325 34.825 108.805 17.422 130.293 3.325z" fill="#005cb9"></path><path opacity=".1" d="M115.999 26h-84a6 6 0 0 0-6 6v59a6 6 0 0 0 6 6h84a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6z" fill="#000"></path><path d="M31.999 22h84a6 6 0 0 1 6 6v59a6 6 0 0 1-6 6h-84a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6h0z" fill="#51616c"></path><path d="M27.999 34h92v53c0 1.061-.421 2.078-1.172 2.828A4 4 0 0 1 115.999 91h-84a4 4 0 0 1-4-4V34zm5-4a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 1 0 0 4z" fill="#fff"></path><g fill="#51616c"><path d="M114.999 39h-82v13h82V39zm0 16h-56v31h56V55z" fill-opacity=".06"></path><path d="M33.999 73a1 1 0 0 1-1-1 1 1 0 0 1 1-1h20a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-20zm0-4a1 1 0 0 1-1-1 1 1 0 0 1 1-1h20a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-20zm0-4a1 1 0 0 1-1-1 1 1 0 0 1 1-1h20a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-20zm0-4a1 1 0 0 1-1-1 1 1 0 0 1 1-1h20a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-20zm0-4a1 1 0 0 1-1-1 1 1 0 0 1 1-1h20a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-20z" fill-opacity=".1"></path></g><path d="M143.124 33.927h-8.278v-9.772c-.066-4.156-1.763-8.119-4.725-11.034s-6.952-4.549-11.108-4.549-8.146 1.634-11.108 4.549-4.659 6.878-4.725 11.034v9.772h-8.279v-9.772A24.11 24.11 0 0 1 119.013.388a24.11 24.11 0 0 1 16.927 6.941c4.512 4.447 7.093 10.492 7.184 16.826v9.772z" fill="#bebebe"></path><path d="M139.845 33.556h-8.279v-9.772c-.057-4.161-1.751-8.133-4.714-11.056s-6.958-4.561-11.12-4.561-8.156 1.639-11.119 4.561-4.657 6.894-4.714 11.056v9.772h-8.278v-9.772c.082-6.341 2.658-12.395 7.171-16.85s10.599-6.953 16.941-6.953 12.428 2.498 16.941 6.953 7.089 10.509 7.171 16.85v9.772z" fill="url(#A)"></path><path d="M121.672 79.614a27.09 27.09 0 0 1-27.25-26.922v-16.3a2.81 2.81 0 0 1 .835-1.983 2.81 2.81 0 0 1 1.993-.811h48.843a2.81 2.81 0 0 1 2.828 2.794v16.3a27.09 27.09 0 0 1-27.25 26.922" fill="#c1811b"></path><path d="M114.249 79.614c-7.184.043-14.09-2.769-19.201-7.818s-8.006-11.921-8.049-19.104v-16.3a2.81 2.81 0 0 1 .835-1.983 2.81 2.81 0 0 1 1.993-.811h48.843a2.81 2.81 0 0 1 1.077.207c.342.139.653.344.916.603a2.8 2.8 0 0 1 .615.908c.144.34.219.705.221 1.074v16.3c-.043 7.184-2.939 14.056-8.049 19.105s-12.017 7.861-19.201 7.818z" fill="#ffd843"></path><path opacity=".01" d="M141.498 33.597h-27.249v46.017h27.249V33.597z" fill="#e70013"></path><g opacity=".722" style="mix-blend-mode: multiply;"><path d="M120.073 50.38a5.87 5.87 0 0 0-.761-2.964c-.512-.903-1.254-1.654-2.15-2.177s-1.916-.798-2.954-.798-2.058.276-2.954.799a5.86 5.86 0 0 0-2.15 2.178 5.87 5.87 0 0 0-.76 2.964c.013 1.038.302 2.054.836 2.944a5.86 5.86 0 0 0 2.205 2.122v6.806c.014.74.318 1.444.846 1.962s1.238.808 1.978.808 1.45-.29 1.978-.808.831-1.223.845-1.962v-6.806c.916-.493 1.681-1.224 2.217-2.116a5.78 5.78 0 0 0 .824-2.951z" fill="#572200"></path></g><path d="M114.385 62.253v-6.806c-1.026-.552-1.861-1.401-2.396-2.435a5.77 5.77 0 0 1-.601-3.363c.143-1.156.632-2.242 1.403-3.115s1.788-1.492 2.918-1.777c1.13.285 2.147.904 2.918 1.777s1.26 1.959 1.403 3.115a5.77 5.77 0 0 1-.601 3.363c-.535 1.035-1.37 1.884-2.396 2.435v6.806c-.001.475-.122.943-.354 1.358a2.8 2.8 0 0 1-.97 1.014 2.8 2.8 0 0 1-.97-1.014c-.232-.415-.354-.883-.354-1.358z" fill="#000" fill-opacity=".59"></path><defs><linearGradient id="A" x1="129.043" y1="35.537" x2="129.417" y2="-3.146" gradientUnits="userSpaceOnUse"><stop offset="1" stop-color="#fff"></stop><stop offset="1" stop-color="#f2f2f2"></stop></linearGradient></defs></svg></div><div class="under-line-text large" role="alert" aria-live="assertive"> Permissions required </div></div><button type="button" class="sol-button btn-primary-large widthToggle"><span class="projected-content">Change Width</span></button><button type="button" class="sol-button btn-primary-large heightToggle"><span class="projected-content">Change Height</span></button></div></main>
```

## Examples / No Result

Usage:
```tsx
({
  iconType,
  autoResize,
  message
}) => {
  const [divWidth, setDivWidth] = useState('100%');
  const [divHeight, setDivHeight] = useState('100%');
  const wrapperStyle: CSSProperties = {
    height: divHeight,
    width: divWidth,
    border: '1px solid black',
    transition: 'width 0.6s ease-in-out, height 0.6s ease-in-out'
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Info overlay preset</h1>
      </header>
      <main style={{
      height: '500px'
    }} role="main">
        <div style={wrapperStyle}>
          <SOLInfoOverlay autoResize={autoResize} iconType={iconType} iconConfiguration={message ? {
          message
        } : undefined} />
          <SOLButton className="widthToggle" onButtonClick={() => setDivWidth(prev => prev === '25%' ? '100%' : '25%')}>
            Change Width
          </SOLButton>
          <SOLButton className="heightToggle" onButtonClick={() => setDivHeight(prev => prev === '35%' ? '100%' : '35%')}>
            Change Height
          </SOLButton>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Info overlay preset</h1></header><main role="main" style="height: 500px;"><div style="height: 100%; width: 100%; border: 1px solid black; transition: width 0.6s ease-in-out, height 0.6s ease-in-out;"><div class="sol-info-overlay"><div class="sol-container-icon" id="large"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="240" height="109" fill="none"><path opacity=".1" d="M192.084 108.447s25.385-29.563 7.585-57.14c-6.642-10.29-23.6-16.069-39.185-11.381-9.207 2.769-23.17 2.36-36.813-22.047-18.605-33.284-95.84-18.15-80.765 40.167 6.35 24.564-17.319 25.682-5.595 50.454l154.773-.053z" fill="#005cb9"></path><path d="M.5 107.5h239a.5.5 0 0 1 .5.5c0 .133-.053.26-.146.354s-.221.146-.354.146H.5c-.133 0-.26-.053-.354-.146A.5.5 0 0 1 0 108c0-.133.053-.26.146-.353A.5.5 0 0 1 .5 107.5h0z" fill="#5b7c8c"></path><path d="M99.096 106.051l1.865 1.582a30.8 30.8 0 0 1-10.114.282l.509-2.317 7.74.453zm-18.589-.282l1.864 1.582c-3.332.651-6.749.747-10.113.283l.509-2.317 7.74.452z" fill="#171e26"></path><path d="M91.449 35.527c.775-.263 1.623-.207 2.357.156s1.294 1.001 1.556 1.776l3.537 10.429 11.661-2.893a12.68 12.68 0 0 0 1.486 5.991l-14.415 3.576c-.751.186-1.544.084-2.222-.286s-1.194-.982-1.444-1.714l-4.448-13.124c-.262-.775-.206-1.622.157-2.355s1.001-1.293 1.775-1.556z" fill="#eeb399"></path><path d="M91.449 35.527c.775-.263 1.623-.207 2.357.156s1.294 1.001 1.556 1.776l3.076 9.079-5.7 2.417-3.221-9.517c-.262-.775-.206-1.622.157-2.355s1.001-1.293 1.775-1.556z" fill="#2d7eb9"></path><path d="M94.805 59.198s6.96 31.507 4.952 47.335c0 0-4.908 1.862-8.7 0 0 0-.933-30.9-5.841-40.646l-4.42 40.181s-2.6 2.327-8.177-.466l4.09-48.193 18.096 1.789z" fill="#1e4d71"></path><path d="M85.217 65.989h.016l.514-.081a.1.1 0 0 0 .077-.058 15.31 15.31 0 0 0 1.088-5.08c.001-.014-.001-.027-.006-.04a.1.1 0 0 0-.021-.035c-.009-.01-.021-.018-.033-.023a.1.1 0 0 0-.04-.008c-.014-.001-.027.001-.04.006a.1.1 0 0 0-.035.021c-.01.009-.018.021-.023.033a.1.1 0 0 0-.008.04 15.2 15.2 0 0 1-1.045 4.949l-.327.052c.196-1.664.234-3.343.115-5.014-.005-.026-.02-.05-.042-.066s-.049-.023-.076-.02a.1.1 0 0 0-.069.04.1.1 0 0 0-.017.037c-.003.013-.003.027-.001.041a28.46 28.46 0 0 1-.13 5.093c-.002.014-.001.029.003.043a.1.1 0 0 0 .021.037c.01.011.021.019.034.025a.1.1 0 0 0 .042.009l.002-.001z" fill="#06263a"></path><path d="M96.309 39.74l-1.5 19.457c-3.303 1.551-6.98 2.13-10.6 1.672-6.2-.721-7.56-3.461-7.56-3.461l1.252-19.281c.181-.189.914-6.462 9.887-5.181s8.521 6.794 8.521 6.794z" fill="#66b4ed"></path><path d="M94.983 55.884L75.811 66.975l.244-2.878 18.928-8.213z" fill="#bcbec0" style="mix-blend-mode: multiply;"></path><path d="M83.904 39.909s-3.284 11.168-1 18.111l-3.682.607-2.578-12.745 4.94-7.06 2.32 1.087z" fill="#000" fill-opacity=".24"></path><path d="M85.715 27.482v5.4l2.487 2.265 2.416-1.472v-3.247l-4.903-2.946z" fill="#eeb399"></path><path d="M86.389 30.204l4.229 1.4v1.728c-2.36-.314-4.229-3.128-4.229-3.128z" fill="#cc957f"></path><path d="M90.297 19.301a4.58 4.58 0 0 1 4.582 4.582v3.939a4.58 4.58 0 0 1-4.582 4.579 4.58 4.58 0 0 1-4.582-4.579v-3.939a4.58 4.58 0 0 1 4.582-4.582h0z" fill="#eeb399"></path><path d="M83.012 66.78a.1.1 0 0 0 .06-.019c1.715-1.214 5.332-.917 5.368-.914.014.002.027 0 .04-.004s.025-.01.036-.019a.1.1 0 0 0 .025-.032c.006-.012.01-.025.01-.039s0-.027-.004-.04-.01-.025-.019-.035-.019-.019-.032-.025-.025-.01-.039-.011c-.151-.013-3.728-.307-5.5.951a.1.1 0 0 0-.047.118.1.1 0 0 0 .107.069h-.006z" fill="#06263a"></path><path d="M96.116 20.417c.13.257.173.55.123.834s-.191.544-.401.742a2.65 2.65 0 0 1-1.559.664c-1.612.113-3.225-.206-4.673-.923a.87.87 0 0 1-.025 1.2c-.164.151-.362.261-.578.32s-.442.065-.66.018c-.063.173.155.311.218.484.106.289-.251.54-.557.574s-.656-.009-.882.2a.83.83 0 0 0-.155.792 3.12 3.12 0 0 1 .158.827c-.016.281-.228.583-.509.563-.3-.022-.54-.391-.827-.3a.43.43 0 0 0-.256.374c-.077.636.617 1.2.465 1.827-.123.506.055.935-.465.956-1.333-1.63-1.984-3.714-1.814-5.813-.024-1.4.674-2.561 1.112-3.89a2.09 2.09 0 0 1 .735-1.122c.184-.135.41-.2.638-.183s.442.113.605.272c.624-.447 1.364-.703 2.131-.738a15.21 15.21 0 0 1 2.074-.2c1.272-.001 2.523.315 3.642.92.386.193.733.457 1.023.777a1.68 1.68 0 0 1 .426 1.185" fill="#233862"></path><path d="M84.646 26.861c.001.222.067.439.191.623s.299.328.505.412.431.106.649.063.417-.151.574-.308a1.12 1.12 0 0 0 .306-.575c.043-.218.021-.443-.064-.648a1.12 1.12 0 0 0-.414-.504c-.185-.123-.402-.189-.624-.189-.148 0-.294.029-.43.086a1.12 1.12 0 0 0-.608.609c-.056.137-.085.283-.085.431z" fill="#eeb399"></path><path opacity=".751" d="M137.621 7.46a24.66 24.66 0 0 1 4.211-1.184l22.615 40.666a24.41 24.41 0 0 1-9.355 6.358l-.842.297-22.752-42.732c1.867-1.422 3.93-2.569 6.123-3.405zm-8.999 5.964l20.759 41.282a24.36 24.36 0 0 1-3.363.182l-19.837-38.454a24.48 24.48 0 0 1 2.441-3.009z" fill="#fff"></path><path d="M67.383 63.215c-.643-1.843.398-4.883 2.242-5.526l47.632-18.345a27.83 27.83 0 0 1 16.901-33.332 27.82 27.82 0 0 1 21.256.619c6.724 3.013 11.978 8.57 14.61 15.452 2.616 6.888 2.394 14.532-.619 21.256a27.82 27.82 0 0 1-15.452 14.61 27.83 27.83 0 0 1-34.525-13.08L72.957 65.885a3.55 3.55 0 0 1-1.512.309 4.69 4.69 0 0 1-4.062-2.98zm68.355-53.054c-5.783 2.212-10.453 6.627-12.984 12.277a23.38 23.38 0 0 0-.521 17.861A23.38 23.38 0 0 0 152.368 53.8a23.38 23.38 0 0 0 13.503-30.136 23.39 23.39 0 0 0-8.424-10.801c-3.822-2.679-8.359-4.153-13.027-4.232-2.966-.049-5.914.47-8.684 1.53l.002.001z" fill="#45545d"></path><g fill="#eeb399"><path d="M113.567 50.36c.222-.089.435-.197.638-.324.342-.253.611-.592.779-.983a2.41 2.41 0 0 0 .179-1.241 1.82 1.82 0 0 0-.2-.692c-.112-.215-.297-.386-.521-.48a.42.42 0 0 0-.421.034c-.06.06-.102.136-.12.219-.065.324-.061.657.013.979a1.73 1.73 0 0 0-.871-.96.52.52 0 0 0-.434.029.5.5 0 0 0-.146.164c-.036.065-.057.137-.062.211a1.45 1.45 0 0 0 .041.44l.071.36c-.09-.176-.211-.334-.357-.466a.66.66 0 0 0-.256-.14c-.095-.027-.195-.032-.292-.015-.142.053-.265.146-.357.266s-.146.265-.159.416c-.04.222-.04.45 0 .672l.121.578a1 1 0 0 1-.093.472c-.036.165-.02.337.046.492a.82.82 0 0 0 .321.376 1.32 1.32 0 0 0 .292.168 1.2 1.2 0 0 0 .888-.183l.9-.392zm-37.76 12.238c.051.377.193.737.414 1.047a.82.82 0 0 0 1.013.241c.166-.106.289-.3.484-.325.245-.034.431.206.646.329a.95.95 0 0 0 1.191-.353c.085-.124.159-.274.3-.327.312-.118.634.332.944.208.237-.095.266-.459.5-.56a1.77 1.77 0 0 1 .411-.036.59.59 0 0 0 .436-.489 1.74 1.74 0 0 0-.053-.69l-.23-1.071a1.71 1.71 0 0 0-.213-.606 1.64 1.64 0 0 0-1.232-.543 7.38 7.38 0 0 0-2.649.094 3.69 3.69 0 0 0-1.9 1.1c-.436.515-.192 1.376-.062 1.981z"></path><path d="M75.679 61.401l-2.687-12.916a3.09 3.09 0 0 1 .3-2.083l5.789-10.83c.191-.357.451-.674.764-.931s.674-.45 1.062-.567.795-.158 1.198-.118.795.159 1.152.35.674.451.931.764.45.674.568 1.062.158.795.118 1.198a3.09 3.09 0 0 1-.35 1.152l-5.261 9.843 2.459 11.82c-2.075.034-4.126.46-6.043 1.256z"></path></g><path d="M83.382 34.095a3.2 3.2 0 0 1 1.555 1.894 3.2 3.2 0 0 1-.241 2.439l-4.1 7.673c-2.055-.626-4.024-1.505-5.861-2.618l4.316-8.074a3.2 3.2 0 0 1 1.893-1.554 3.2 3.2 0 0 1 2.438.24z" fill="#66b4ed"></path></svg></div><div class="under-line-text large" role="status" aria-live="polite"> No results found </div></div><button type="button" class="sol-button btn-primary-large widthToggle"><span class="projected-content">Change Width</span></button><button type="button" class="sol-button btn-primary-large heightToggle"><span class="projected-content">Change Height</span></button></div></main>
```

## Examples / Self Config

Usage:
```tsx
({
  iconConfiguration
}) => {
  const [divWidth, setDivWidth] = useState('100%');
  const [divHeight, setDivHeight] = useState('100%');
  const wrapperStyle: CSSProperties = {
    height: divHeight,
    width: divWidth,
    border: '1px solid black',
    transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out'
  };
  return <>
      <header>
        <h1 className="sol-screenreader-only">Info overlay self config</h1>
      </header>
      <main style={{
      height: '500px'
    }}>
        <div className="container-info" style={wrapperStyle}>
          <SOLInfoOverlay iconConfiguration={iconConfiguration} />
          <SOLButton className="widthToggle" onButtonClick={() => setDivWidth(prev => prev === '25%' ? '100%' : '25%')}>
            Change Width
          </SOLButton>
          <SOLButton className="heightToggle" onButtonClick={() => setDivHeight(prev => prev === '40%' ? '100%' : '40%')}>
            Change Height
          </SOLButton>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<header><h1 class="sol-screenreader-only">Info overlay self config</h1></header><main style="height: 500px;"><div class="container-info" style="height: 100%; width: 100%; border: 1px solid black; transition: width 0.3s ease-in-out, height 0.3s ease-in-out;"><div class="sol-info-overlay"><div class="sol-container-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width: 5rem; height: 5rem;" class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" version="1.1" viewBox="0 0 48 48"><title>illustration/colors</title><g id="illustration/colors" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><circle id="Oval" cx="23.763" cy="16.192" r="13.271" fill="#FC521F" opacity=".6"></circle><circle id="Oval-Copy" cx="15.468" cy="32.308" r="13.271" fill="#66BF3C" opacity=".6"></circle><path id="Combined-Shape" fill="#FF5F95" d="M15.4683651,19.0362231 C21.5434817,19.0362231 26.6652087,23.1181689 28.2404554,28.6889694 C26.8420385,29.1906678 25.3344184,29.4637769 23.7630101,29.4637769 C17.6878936,29.4637769 12.5661666,25.3818311 10.9909199,19.8110306 C12.3898993,19.3092302 13.8972501,19.0362231 15.4683651,19.0362231 Z"></path><circle id="Oval-Copy-2" cx="32.532" cy="32.308" r="13.271" fill="#1EA7FD" opacity=".6"></circle><path id="Combined-Shape" fill="#87E6E5" d="M24.00025,22.1417324 C26.897967,24.5762286 28.7397972,28.2268506 28.7397972,32.3076552 C28.7397972,36.3884597 26.897967,40.0390817 24.00025,42.4735779 C21.1018087,40.038637 19.2602028,36.3882111 19.2602028,32.3076552 C19.2602028,28.2815316 21.0530043,24.6741393 23.8838362,22.2402492 Z"></path><path id="Combined-Shape" fill="#FBD178" d="M32.5316349,19.0362231 C33.9415155,19.0362231 35.3000478,19.2560712 36.5748203,19.6633557 C35.0489179,25.3104816 29.8909911,29.4637769 23.7630101,29.4637769 C22.3527608,29.4637769 20.9938866,29.2438138 19.7188247,28.8363247 C21.2451195,23.1900077 26.403293,19.0362231 32.5316349,19.0362231 Z"></path><path id="Combined-Shape" fill="#FFF" d="M24.00025,22.1417324 L24.0124326,22.1519799 C24.1747744,22.288701 24.3337918,22.4292434 24.4893463,22.5734686 L24.3896855,22.4820008 C24.4671836,22.552408 24.5438453,22.6237194 24.619654,22.6959185 L24.4893463,22.5734686 C24.5690639,22.6473803 24.6478719,22.7222591 24.7257519,22.7980864 L24.619654,22.6959185 C24.6907654,22.7636441 24.7611262,22.8321506 24.8307226,22.9014245 L24.7257519,22.7980864 C24.8120661,22.8821258 24.8972403,22.9673303 24.981249,23.0536745 L24.8307226,22.9014245 C24.9073006,22.9776475 24.9829531,23.0547994 25.0576619,23.132862 L25.057852,23.1330605 C25.3140855,23.4007967 25.559391,23.679459 25.7928375,23.9681079 L25.7230574,23.8825538 C25.7985998,23.9743942 25.8729325,24.0672672 25.9460311,24.1611484 L25.7928375,23.9681079 C25.8624256,24.0541514 25.93096,24.1410823 25.998421,24.228881 L25.9460311,24.1611484 C26.0074362,24.2400115 26.0679704,24.319586 26.1276194,24.3998576 L25.998421,24.228881 C26.0663495,24.317288 26.1331896,24.4065749 26.1989214,24.4967216 L26.1276194,24.3998576 C26.204848,24.5037867 26.2805926,24.6088841 26.3548219,24.7151187 L26.1989214,24.4967216 C26.2678555,24.59126 26.3355706,24.6867441 26.4020436,24.7831507 L26.3548219,24.7151187 C26.4130013,24.798383 26.4702498,24.8823459 26.5265523,24.9669921 L26.4020436,24.7831507 C26.4678788,24.8786322 26.5324956,24.9750187 26.5958716,25.0722875 L26.5959296,25.0723765 C26.736338,25.2878741 26.870709,25.5077955 26.9987399,25.7318073 L26.9410662,25.6319089 C26.9973106,25.7283602 27.0523736,25.8255849 27.1062352,25.9235633 L26.9987399,25.7318073 C27.0539848,25.8284676 27.1080492,25.9258895 27.1609136,26.0240532 L27.1606656,26.0235927 C27.2696676,26.2259984 27.3733426,26.4310837 27.4717677,26.6391379 L27.4715275,26.6386302 C27.5541941,26.8133735 27.6329386,26.9896914 27.7079006,27.1679911 C27.7630163,27.299081 27.8161443,27.431391 27.8671831,27.5647345 L27.804312,27.4036517 C27.8391482,27.4912057 27.8730792,27.5792182 27.9060936,27.6676774 L27.8671831,27.5647345 C27.906613,27.6677486 27.9447959,27.7713796 27.9817136,27.8756091 L27.9060936,27.6676774 C27.946474,27.7758735 27.9854831,27.884738 28.0230997,27.9942498 L27.9817136,27.8756091 C28.0144978,27.9681688 28.0462842,28.0612004 28.0770597,28.1546911 L28.0230997,27.9942498 C28.0618265,28.1069941 28.0990774,28.2204244 28.1348294,28.3345177 L28.0770597,28.1546911 C28.1112208,28.2584663 28.1441365,28.3628071 28.175789,28.4676958 L28.1756797,28.4673338 L28.2408136,28.6893554 C28.2284694,28.6937793 28.2161167,28.6981854 28.2037557,28.7025737 L28.2404554,28.6889694 C27.9517707,28.7925384 27.6584322,28.8863659 27.3608394,28.97006 L27.3609965,28.9702524 C27.0695498,29.0519815 26.7741843,29.1241944 26.4751174,29.1863314 L26.5385665,29.1730829 C26.3901218,29.2046704 26.2407589,29.2337757 26.0905233,29.2603535 L26.4751174,29.1863314 C26.3367402,29.215082 26.1975707,29.2416755 26.0576458,29.2660754 L26.0905233,29.2603535 C25.9366833,29.2875689 25.7819282,29.312134 25.6263069,29.334 L26.0576458,29.2660754 C25.9017815,29.2932549 25.7449801,29.3177127 25.5872928,29.3393985 L25.6263069,29.334 C25.493366,29.3526793 25.3597929,29.3693888 25.2256182,29.3840982 L25.5872928,29.3393985 C25.4326976,29.360659 25.277251,29.3792552 25.1210012,29.3951396 L25.2256182,29.3840982 C25.0570566,29.4025774 24.8875455,29.4178998 24.7171453,29.4300052 L25.1210012,29.3951396 C24.9661341,29.4108835 24.810478,29.4239634 24.6540799,29.4343333 L24.7171453,29.4300052 C24.5612618,29.4410793 24.4046342,29.4494611 24.2473088,29.4551045 L24.6540799,29.4343333 C24.5098436,29.4438967 24.3649762,29.4511552 24.2195147,29.4560724 L24.2473088,29.4551045 C24.0865878,29.4608697 23.9251385,29.4637769 23.7630101,29.4637769 L23.3130142,29.4562912 C23.2993121,29.4558347 23.2856153,29.4553574 23.2719237,29.4548593 C22.9596275,29.4434959 22.6502324,29.4213577 22.3439491,29.3888006 L22.3886972,29.3934808 C22.2468147,29.3788837 22.105595,29.3620515 21.9650736,29.3430199 L22.3439491,29.3888006 C22.1914515,29.3725905 22.0397254,29.3537976 21.8888152,29.3324664 L21.9650736,29.3430199 C21.8025527,29.3210088 21.6409661,29.2960557 21.4803691,29.2682161 L21.8888152,29.3324664 C21.7352182,29.3107553 21.5824665,29.2864149 21.4306071,29.2594919 L21.4803691,29.2682161 C21.3506285,29.2457255 21.2215338,29.221351 21.0931142,29.1951218 L21.4306071,29.2594919 C21.2772401,29.2323016 21.1247833,29.2024774 20.973285,29.1700676 L21.0931142,29.1951218 C20.9267071,29.1611338 20.7614335,29.1240315 20.5973571,29.0838786 L20.973285,29.1700676 C20.825476,29.138447 20.6785795,29.1043653 20.5326403,29.0678674 L20.5973571,29.0838786 C20.4596684,29.0501832 20.3228227,29.0143396 20.1868576,28.9763851 L20.5326403,29.0678674 C20.3930822,29.0329653 20.2543997,28.9958536 20.1166319,28.9565718 L20.1169729,28.956669 L19.7188247,28.8363247 L19.7188247,28.8363247 L19.7880988,28.5894836 C19.8166627,28.4914193 19.8463277,28.3938241 19.8770797,28.2967124 L19.8480041,28.389868 C19.888904,28.2573207 19.931824,28.1256601 19.9767281,27.9949221 L19.8770797,28.2967124 C19.9117081,28.1873592 19.9477148,28.0786191 19.9850793,27.9705124 L19.9853117,27.9700125 C20.1152243,27.5939638 20.2618428,27.2250995 20.4240731,26.8647811 L20.345088,27.0439391 C20.3899401,26.9402428 20.4360767,26.8372321 20.4834778,26.7349269 L20.4240731,26.8647811 C20.461061,26.78263 20.4988604,26.7009231 20.5374612,26.6196707 L20.4834778,26.7349269 C20.5344734,26.6248636 20.5869326,26.515617 20.6408302,26.4072119 L20.5374612,26.6196707 C20.5871241,26.5151329 20.6381134,26.4113474 20.6904074,26.308336 L20.6408302,26.4072119 C20.681671,26.3250682 20.7233378,26.2434076 20.7658197,26.1622412 L20.7658807,26.1619302 C20.8435258,26.013775 20.923959,25.866962 21.0070529,25.7218685 C21.2050227,25.3759931 21.4182299,25.0398756 21.6456589,24.7144306 L21.5286537,24.8848257 C21.5876708,24.7975143 21.6476996,24.7109431 21.7087233,24.6251289 L21.6456589,24.7144306 C21.6993229,24.6376387 21.7537788,24.5614411 21.8090146,24.4858495 L21.7087233,24.6251289 C21.7826333,24.5211934 21.8580028,24.4183683 21.9348018,24.3166836 L21.8090146,24.4858495 C21.8722751,24.3992759 21.9365587,24.3134973 22.0018475,24.2285315 L22.0016895,24.2288802 C22.3179789,23.8171232 22.6576794,23.4247699 23.0189296,23.053491 L22.8296293,23.2521975 C22.9033796,23.1732135 22.9780829,23.095131 23.0537208,23.0179683 L23.0189296,23.053491 C23.083529,22.9870982 23.1488175,22.9213793 23.2147836,22.8563459 L23.0537208,23.0179683 C23.131055,22.9390752 23.2093662,22.8611436 23.2886348,22.7841931 L23.2147836,22.8563459 C23.2821211,22.7899605 23.3501645,22.7242893 23.4189017,22.6593447 L23.2886348,22.7841931 C23.3852399,22.6904132 23.4832671,22.5980904 23.582681,22.5072602 L23.4189017,22.6593447 C23.4912637,22.5909753 23.5643945,22.523411 23.6382797,22.4566663 L23.582681,22.5072602 C23.6715916,22.4260264 23.7616113,22.3459865 23.8527148,22.2671658 L23.8525967,22.2671923 C23.8915062,22.2336043 23.9304941,22.2002638 23.9696766,22.1671464 L24.00025,22.1417324 Z"></path></g></svg></div></span></div><div role="alert" aria-live="assertive" class="under-line-text large config"> Some different text </div></div><button type="button" class="sol-button btn-primary-large widthToggle"><span class="projected-content">Change Width</span></button><button type="button" class="sol-button btn-primary-large heightToggle"><span class="projected-content">Change Height</span></button></div></main>
```

## Examples / Sol Icon Config

Usage:
```tsx
({
  icon,
  message,
  iconStyles
}) => {
  const [divWidth, setDivWidth] = useState('100%');
  const [divHeight, setDivHeight] = useState('100%');
  const wrapperStyle: CSSProperties = {
    height: divHeight,
    width: divWidth,
    border: '1px solid black',
    transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out'
  };
  const iconConfiguration: IconConfiguration = {
    icon: {
      icon,
      className: 'my-class'
    },
    message,
    iconStyles
  };
  return <>
      <style>{`
        .container-info .my-class {
          fill: #007acc;
          stroke: #005a9a;
          stroke-width: 1px;
        }
      `}</style>
      <header>
        <h1 className="sol-screenreader-only">Info overlay sol icon config</h1>
      </header>
      <main style={{
      height: '500px'
    }}>
        <div className="container-info" style={wrapperStyle}>
          <div className="nice-icon-sprite" data-spritename="navigation" data-spriteurl="/common_svg_icons/svg/navigation-icons-1622706561625.svg" style={{
          display: 'none'
        }}>
            <svg aria-hidden="true" style={{
            position: 'absolute',
            width: 0,
            height: 0,
            overflow: 'hidden'
          }} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <symbol viewBox="0 0 32 32" id="icon-Icons_svg_setup" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.12 16.8v-1.6l2.4-2.24c.48-.48.64-1.12.32-1.6L30.56 8c-.16-.48-.8-.8-1.44-.96l-3.2.16-1.12-1.12.16-3.2c0-.64-.32-1.12-.96-1.44L20.64 0H20c-.32 0-.8.16-1.12.48l-2.24 2.4h-1.6L12.96.48C12.8.16 12.32 0 12 0s-.48 0-.64.16L8 1.44c-.48.32-.96.8-.8 1.44l.16 3.2-1.12 1.28-3.2-.16c-.8 0-1.28.32-1.6.8L.16 11.36C0 12 0 12.64.48 12.96l2.4 2.24v1.6l-2.4 2.24c-.48.48-.64 1.12-.32 1.6L1.44 24c.16.48.8.96 1.44.96l3.2-.16 1.12 1.12-.16 3.2c0 .64.32 1.12.96 1.44L11.36 32H12c.48 0 .8-.16 1.12-.48l2.24-2.4h1.6l2.24 2.4c.32.32.64.48 1.12.48.16 0 .32 0 .48-.16l3.36-1.44c.64-.16.96-.8.96-1.44l-.16-3.2 1.12-1.12 3.36.16c.64 0 1.12-.32 1.28-.96l1.44-3.36c.16-.48.16-1.28-.32-1.6l-2.72-2.08zM28 21.6l-2.08-.16h-1.44l-3.04 3.04v1.44L21.6 28l-1.12.48-1.28-1.6-.96-1.12h-4.48l-.96 1.12-1.28 1.44-1.12-.48.16-2.08v-1.44l-.96-.8-2.08-2.08H6.08L4 21.6l-.48-1.12 1.6-1.28 1.12-.96v-4.48l-1.12-.96-1.6-1.28L4 10.4l2.08.16h1.44l3.04-3.04V6.08L10.4 4l1.12-.48 1.28 1.6.96 1.12h4.48l.96-1.12 1.28-1.44 1.12.48-.16 2.08v1.44l.96.8 2.08 2.08h1.44L28 10.4l.48 1.12-1.6 1.28-1.12.96v4.48l1.12.96 1.44 1.28L28 21.6z"></path>
                <path d="M16 10.08c-3.2 0-5.92 2.72-5.92 5.92s2.72 5.92 5.92 5.92c3.2 0 5.92-2.72 5.92-5.92S19.2 10.08 16 10.08zm0 8.64c-1.44 0-2.72-1.28-2.72-2.72s1.28-2.72 2.72-2.72c1.44 0 2.72 1.28 2.72 2.72s-1.28 2.72-2.72 2.72z"></path>
              </symbol>
            </svg>
          </div>
          <SOLInfoOverlay iconConfiguration={iconConfiguration} />
          <SOLButton className="widthToggle" onButtonClick={() => setDivWidth(prev => prev === '25%' ? '100%' : '25%')}>
            Change Width
          </SOLButton>
          <SOLButton className="heightToggle" onButtonClick={() => setDivHeight(prev => prev === '40%' ? '100%' : '40%')}>
            Change Height
          </SOLButton>
        </div>
      </main>
    </>;
}
```

Rendered markup:
```html
<style>
        .container-info .my-class {
          fill: #007acc;
          stroke: #005a9a;
          stroke-width: 1px;
        }
      </style><header><h1 class="sol-screenreader-only">Info overlay sol icon config</h1></header><main style="height: 500px;"><div class="container-info" style="height: 100%; width: 100%; border: 1px solid black; transition: width 0.3s ease-in-out, height 0.3s ease-in-out;"><div class="nice-icon-sprite" data-spritename="navigation" data-spriteurl="/common_svg_icons/svg/navigation-icons-1622706561625.svg" style="display: none;"><svg aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;"><symbol viewBox="0 0 32 32" id="icon-Icons_svg_setup" xmlns="http://www.w3.org/2000/svg"><path d="M29.12 16.8v-1.6l2.4-2.24c.48-.48.64-1.12.32-1.6L30.56 8c-.16-.48-.8-.8-1.44-.96l-3.2.16-1.12-1.12.16-3.2c0-.64-.32-1.12-.96-1.44L20.64 0H20c-.32 0-.8.16-1.12.48l-2.24 2.4h-1.6L12.96.48C12.8.16 12.32 0 12 0s-.48 0-.64.16L8 1.44c-.48.32-.96.8-.8 1.44l.16 3.2-1.12 1.28-3.2-.16c-.8 0-1.28.32-1.6.8L.16 11.36C0 12 0 12.64.48 12.96l2.4 2.24v1.6l-2.4 2.24c-.48.48-.64 1.12-.32 1.6L1.44 24c.16.48.8.96 1.44.96l3.2-.16 1.12 1.12-.16 3.2c0 .64.32 1.12.96 1.44L11.36 32H12c.48 0 .8-.16 1.12-.48l2.24-2.4h1.6l2.24 2.4c.32.32.64.48 1.12.48.16 0 .32 0 .48-.16l3.36-1.44c.64-.16.96-.8.96-1.44l-.16-3.2 1.12-1.12 3.36.16c.64 0 1.12-.32 1.28-.96l1.44-3.36c.16-.48.16-1.28-.32-1.6l-2.72-2.08zM28 21.6l-2.08-.16h-1.44l-3.04 3.04v1.44L21.6 28l-1.12.48-1.28-1.6-.96-1.12h-4.48l-.96 1.12-1.28 1.44-1.12-.48.16-2.08v-1.44l-.96-.8-2.08-2.08H6.08L4 21.6l-.48-1.12 1.6-1.28 1.12-.96v-4.48l-1.12-.96-1.6-1.28L4 10.4l2.08.16h1.44l3.04-3.04V6.08L10.4 4l1.12-.48 1.28 1.6.96 1.12h4.48l.96-1.12 1.28-1.44 1.12.48-.16 2.08v1.44l.96.8 2.08 2.08h1.44L28 10.4l.48 1.12-1.6 1.28-1.12.96v4.48l1.12.96 1.44 1.28L28 21.6z"></path><path d="M16 10.08c-3.2 0-5.92 2.72-5.92 5.92s2.72 5.92 5.92 5.92c3.2 0 5.92-2.72 5.92-5.92S19.2 10.08 16 10.08zm0 8.64c-1.44 0-2.72-1.28-2.72-2.72s1.28-2.72 2.72-2.72c1.44 0 2.72 1.28 2.72 2.72s-1.28 2.72-2.72 2.72z"></path></symbol></svg></div><div class="sol-info-overlay"><div class="sol-container-icon"><span class="sol-icon-host"><div class="sol-icon" aria-hidden="true"><svg style="width: 5rem; height: 5rem;" class="icon my-class"><use href="./assets/application-icons.svg#icon-help"></use></svg></div></span></div><div role="alert" aria-live="assertive" class="under-line-text large config"> Some different text </div></div><button type="button" class="sol-button btn-primary-large widthToggle"><span class="projected-content">Change Width</span></button><button type="button" class="sol-button btn-primary-large heightToggle"><span class="projected-content">Change Height</span></button></div></main>
```
