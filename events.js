HTML DOM Events
HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

Event	Description	Belongs To
abort	The event occurs when the loading of a media is aborted	UiEvent, Event
afterprint	The event occurs when a page has started printing, or if the print dialogue box has been closed	Event
animationend	The event occurs when a CSS animation has completed	AnimationEvent
animationiteration	The event occurs when a CSS animation is repeated	AnimationEvent
animationstart	The event occurs when a CSS animation has started	AnimationEvent
beforeprint	The event occurs when a page is about to be printed	Event
beforeunload	The event occurs before the document is about to be unloaded	UiEvent, Event
blur	The event occurs when an element loses focus	FocusEvent
canplay	The event occurs when the browser can start playing the media (when it has buffered enough to begin)	Event
canplaythrough	The event occurs when the browser can play through the media without stopping for buffering	Event
change	The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)	Event
click	The event occurs when the user clicks on an element	MouseEvent
contextmenu	The event occurs when the user right-clicks on an element to open a context menu	MouseEvent
copy	The event occurs when the user copies the content of an element	ClipboardEvent
cut	The event occurs when the user cuts the content of an element	ClipboardEvent
dblclick	The event occurs when the user double-clicks on an element	MouseEvent
drag	The event occurs when an element is being dragged	DragEvent
dragend	The event occurs when the user has finished dragging an element	DragEvent
dragenter	The event occurs when the dragged element enters the drop target	DragEvent
dragleave	The event occurs when the dragged element leaves the drop target	DragEvent
dragover	The event occurs when the dragged element is over the drop target	DragEvent
dragstart	The event occurs when the user starts to drag an element	DragEvent
drop	The event occurs when the dragged element is dropped on the drop target	DragEvent
durationchange	The event occurs when the duration of the media is changed	Event
ended	The event occurs when the media has reach the end (useful for messages like "thanks for listening")	Event
error	The event occurs when an error occurs while loading an external file	ProgressEvent,UiEvent, Event
focus	The event occurs when an element gets focus	FocusEvent
focusin	The event occurs when an element is about to get focus	FocusEvent
focusout	The event occurs when an element is about to lose focus	FocusEvent
fullscreenchange	The event occurs when an element is displayed in fullscreen mode	Event
fullscreenerror	The event occurs when an element can not be displayed in fullscreen mode	Event
hashchange	The event occurs when there has been changes to the anchor part of a URL	HashChangeEvent
input	The event occurs when an element gets user input	InputEvent, Event
invalid	The event occurs when an element is invalid	Event
keydown	The event occurs when the user is pressing a key	KeyboardEvent
keypress	The event occurs when the user presses a key	KeyboardEvent
keyup	The event occurs when the user releases a key	KeyboardEvent
load	The event occurs when an object has loaded	UiEvent, Event
loadeddata	The event occurs when media data is loaded	Event
loadedmetadata	The event occurs when meta data (like dimensions and duration) are loaded	Event
loadstart	The event occurs when the browser starts looking for the specified media	ProgressEvent
message	The event occurs when a message is received through the event source	Event
mousedown	The event occurs when the user presses a mouse button over an element	MouseEvent
mouseenter	The event occurs when the pointer is moved onto an element	MouseEvent
mouseleave	The event occurs when the pointer is moved out of an element	MouseEvent
mousemove	The event occurs when the pointer is moving while it is over an element	MouseEvent
mouseover	The event occurs when the pointer is moved onto an element, or onto one of its children	MouseEvent
mouseout	The event occurs when a user moves the mouse pointer out of an element, or out of one of its children	MouseEvent
mouseup	The event occurs when a user releases a mouse button over an element	MouseEvent
mousewheel	Deprecated. Use the wheel event instead	WheelEvent
offline	The event occurs when the browser starts to work offline	Event
online	The event occurs when the browser starts to work online	Event
open	The event occurs when a connection with the event source is opened	Event
pagehide	The event occurs when the user navigates away from a webpage	PageTransitionEvent
pageshow	The event occurs when the user navigates to a webpage	PageTransitionEvent
paste	The event occurs when the user pastes some content in an element	ClipboardEvent
pause	The event occurs when the media is paused either by the user or programmatically	Event
play	The event occurs when the media has been started or is no longer paused	Event
playing	The event occurs when the media is playing after having been paused or stopped for buffering	Event
popstate	The event occurs when the window's history changes	PopStateEvent
progress	The event occurs when the browser is in the process of getting the media data (downloading the media)	Event
ratechange	The event occurs when the playing speed of the media is changed	Event
resize	The event occurs when the document view is resized	UiEvent, Event
reset	The event occurs when a form is reset	Event
scroll	The event occurs when an element's scrollbar is being scrolled	UiEvent, Event
search	The event occurs when the user writes something in a search field (for <input="search">)	Event
seeked	The event occurs when the user is finished moving/skipping to a new position in the media	Event
seeking	The event occurs when the user starts moving/skipping to a new position in the media	Event
select	The event occurs after the user selects some text (for <input> and <textarea>)	UiEvent, Event
show	The event occurs when a <menu> element is shown as a context menu	Event
stalled	The event occurs when the browser is trying to get media data, but data is not available	Event
storage	The event occurs when a Web Storage area is updated	StorageEvent
submit	The event occurs when a form is submitted	Event
suspend	The event occurs when the browser is intentionally not getting media data	Event
timeupdate	The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)	Event
toggle	The event occurs when the user opens or closes the <details> element	Event
touchcancel	The event occurs when the touch is interrupted	TouchEvent
touchend	The event occurs when a finger is removed from a touch screen	TouchEvent
touchmove	The event occurs when a finger is dragged across the screen	TouchEvent
touchstart	The event occurs when a finger is placed on a touch screen	TouchEvent
transitionend	The event occurs when a CSS transition has completed	TransitionEvent
unload	The event occurs once a page has unloaded (for <body>)	UiEvent, Event
volumechange	The event occurs when the volume of the media has changed (includes setting the volume to "mute")	Event
waiting	The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)	Event
wheel	The event occurs when the mouse wheel rolls up or down over an element	WheelEvent



HTML DOM Event Properties and Methods
Property/Method	Description	Belongs To
altKey	Returns whether the "ALT" key was pressed when the mouse event was triggered	MouseEvent
altKey	Returns whether the "ALT" key was pressed when the key event was triggered	KeyboardEvent,TouchEvent
animationName	Returns the name of the animation	AnimationEvent
bubbles	Returns whether or not a specific event is a bubbling event	Event
button	Returns which mouse button was pressed when the mouse event was triggered	MouseEvent
buttons	Returns which mouse buttons were pressed when the mouse event was triggered	MouseEvent
cancelable	Returns whether or not an event can have its default action prevented	Event
charCode	Returns the Unicode character code of the key that triggered the onkeypress event	KeyboardEvent
changeTouches	Returns a list of all the touch objects whose state changed between the previous touch and this touch	TouchEvent
clientX	Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent,TouchEvent
clientY	Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent,TouchEvent
clipboardData	Returns an object containing the data affected by the clipboard operation	ClipboardData
code	Returns the code of the key that triggered the event	KeyboardEvent
composed	Returns whether the event is composed or not	Event
createEvent()	Creates a new event	Event
ctrlKey	Returns whether the "CTRL" key was pressed when the mouse event was triggered	MouseEvent
ctrlKey	Returns whether the "CTRL" key was pressed when the key event was triggered	KeyboardEvent,TouchEvent
currentTarget	Returns the element whose event listeners triggered the event	Event
data	Returns the inserted characters	InputEvent
dataTransfer	Returns an object containing the data being dragged/dropped, or inserted/deleted	DragEvent, InputEvent
defaultPrevented	Returns whether or not the preventDefault() method was called for the event	Event
deltaX	Returns the horizontal scroll amount of a mouse wheel (x-axis)	WheelEvent
deltaY	Returns the vertical scroll amount of a mouse wheel (y-axis)	WheelEvent
deltaZ	Returns the scroll amount of a mouse wheel for the z-axis	WheelEvent
deltaMode	Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)	WheelEvent
detail	Returns a number that indicates how many times the mouse was clicked	UiEvent
elapsedTime	Returns the number of seconds an animation has been running	AnimationEvent
elapsedTime	Returns the number of seconds a transition has been running	 
eventPhase	Returns which phase of the event flow is currently being evaluated	Event
getTargetRanges()	Returns an array containing target ranges that will be affected by the insertion/deletion	InputEvent
getModifierState()	Returns an array containing target ranges that will be affected by the insertion/deletion	MouseEvent
inputType	Returns the type of the change (i.e "inserting" or "deleting")	InputEvent
isComposing	Returns whether the state of the event is composing or not	InputEvent,KeyboardEvent
isTrusted	Returns whether or not an event is trusted	Event
key	Returns the key value of the key represented by the event	KeyboardEvent
key	Returns the key of the changed storage item	StorageEvent
keyCode	Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	KeyboardEvent
location	Returns the location of a key on the keyboard or device	KeyboardEvent
lengthComputable	Returns whether the length of the progress can be computable or not	ProgressEvent
loaded	Returns how much work has been loaded	ProgressEvent
metaKey	Returns whether the "META" key was pressed when an event was triggered	MouseEvent
metaKey	Returns whether the "meta" key was pressed when the key event was triggered	KeyboardEvent,TouchEvent
MovementX	Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
MovementY	Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
newValue	Returns the new value of the changed storage item	StorageEvent
newURL	Returns the URL of the document, after the hash has been changed	HasChangeEvent
offsetX	Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
offsetY	Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
oldValue	Returns the old value of the changed storage item	StorageEvent
oldURL	Returns the URL of the document, before the hash was changed	HasChangeEvent
onemptied	The event occurs when something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)	 
pageX	Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
pageY	Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
persisted	Returns whether the webpage was cached by the browser	PageTransitionEvent
preventDefault()	Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	Event
propertyName	Returns the name of the CSS property associated with the animation or transition	AnimationEvent,TransitionEvent
pseudoElement	Returns the name of the pseudo-element of the animation or transition	AnimationEvent,TransitionEvent
region		MouseEvent
relatedTarget	Returns the element related to the element that triggered the mouse event	MouseEvent
relatedTarget	Returns the element related to the element that triggered the event	FocusEvent
repeat	Returns whether a key is being hold down repeatedly, or not	KeyboardEvent
screenX	Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
screenY	Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
shiftKey	Returns whether the "SHIFT" key was pressed when an event was triggered	MouseEvent
shiftKey	Returns whether the "SHIFT" key was pressed when the key event was triggered	KeyboardEvent,TouchEvent
state	Returns an object containing a copy of the history entries	PopStateEvent
stopImmediatePropagation()	Prevents other listeners of the same event from being called	Event
stopPropagation()	Prevents further propagation of an event during event flow	Event
storageArea	Returns an object representing the affected storage object	StorageEvent
target	Returns the element that triggered the event	Event
targetTouches	Returns a list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element	TouchEvent
timeStamp	Returns the time (in milliseconds relative to the epoch) at which the event was created	Event
total	Returns the total amount of work that will be loaded	ProgressEvent
touches	Returns a list of all the touch objects that are currently in contact with the surface	TouchEvent
transitionend	The event occurs when a CSS transition has completed	TransitionEvent
type	Returns the name of the event	Event
url	Returns the URL of the changed item's document	StorageEvent
which	Returns which mouse button was pressed when the mouse event was triggered	MouseEvent
which	Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	KeyboardEvent
view	Returns a reference to the Window object where the event occurred	UiEvent