import React from 'react'

export const useSvg = () => {
   const svg = {
      history: <svg viewBox="0 0 62.246 62.246"><path d="M57.548,45.107H19.965c-2.595,0-4.699,2.105-4.699,4.701c0,2.594,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.105,4.698-4.699C62.246,47.213,60.142,45.107,57.548,45.107z" /><path d="M57.548,26.402H19.965c-2.595,0-4.699,2.104-4.699,4.7c0,2.595,2.104,4.699,4.699,4.699h37.583c2.594,0,4.698-2.104,4.698-4.699S60.142,26.402,57.548,26.402z" /><path d="M19.965,17.096h37.583c2.594,0,4.698-2.104,4.698-4.7s-2.104-4.699-4.698-4.699H19.965c-2.595,0-4.699,2.104-4.699,4.699C15.266,14.991,17.37,17.096,19.965,17.096z" /><circle cx="4.77" cy="12.439" r="4.77" /><circle cx="4.77" cy="31.102" r="4.769" /><circle cx="4.77" cy="49.807" r="4.77" /></svg>,
      slot: <svg viewBox="0 0 512 512"><g><g id="XMLID_1203_"><g id="XMLID_304_"><path id="XMLID_305_" d="m462 66h-161c-5.523 0-10 4.477-10 10s4.477 10 10 10h161c16.542 0 30 13.458 30 30v280c0 16.542-13.458 30-30 30h-412c-16.542 0-30-13.458-30-30v-280c0-16.542 13.458-30 30-30h161c5.523 0 10-4.477 10-10s-4.477-10-10-10h-161c-27.57 0-50 22.43-50 50v280c0 27.57 22.43 50 50 50h412c27.57 0 50-22.43 50-50v-280c0-27.57-22.43-50-50-50z" data-original="#000000" /><path id="XMLID_581_" d="m44 120v272c0 5.523 4.477 10 10 10h404c5.523 0 10-4.477 10-10v-272c0-5.523-4.477-10-10-10h-404c-5.523 0-10 4.477-10 10zm155 262v-252h114v252zm249 0h-115v-252h115zm-384-252h115v252h-115z" data-original="#000000" /><path id="XMLID_1073_" d="m156.874 201.454c-1.847-2.829-4.996-4.534-8.374-4.534h-54c-5.523 0-10 4.477-10 10s4.477 10 10 10h38.681l-36.985 84.135c-2.222 5.056.075 10.956 5.13 13.179 1.31.575 2.675.848 4.019.848 3.846 0 7.513-2.231 9.16-5.978l43.149-98.159c1.36-3.093 1.066-6.662-.78-9.491z" data-original="#000000" /><path id="XMLID_1074_" d="m363.5 216.92h38.681l-36.985 84.135c-2.222 5.056.075 10.956 5.13 13.179 1.31.575 2.675.848 4.019.848 3.846 0 7.513-2.231 9.16-5.978l43.149-98.159c1.359-3.092 1.066-6.662-.78-9.491-1.847-2.829-4.996-4.534-8.374-4.534h-54c-5.523 0-10 4.477-10 10s4.477 10 10 10z" data-original="#000000" /><path id="XMLID_1077_" d="m291.374 201.454c-1.847-2.829-4.996-4.534-8.374-4.534h-54c-5.523 0-10 4.477-10 10s4.477 10 10 10h38.681l-36.985 84.135c-2.222 5.056.075 10.956 5.13 13.179 1.31.575 2.675.848 4.019.848 3.846 0 7.513-2.231 9.16-5.978l43.149-98.159c1.36-3.093 1.066-6.662-.78-9.491z" data-original="#000000" /><path id="XMLID_1078_" d="m256 86c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07-4.44-2.93-7.07-2.93-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93z" data-original="#000000" /></g></g></g></svg>,
      about: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26.072 2.274h-1.271v-1.547c0-0.401-0.325-0.727-0.727-0.727s-0.727 0.325-0.727 0.727v0 1.554h-14.667v-1.554c0-0.401-0.325-0.726-0.726-0.726s-0.726 0.325-0.726 0.726v0 1.554h-1.235c-2.006 0.001-3.631 1.627-3.632 3.632v22.455c0.001 2.006 1.627 3.631 3.632 3.632h20.072c2.006-0.001 3.631-1.627 3.632-3.632v-22.462c0-2.003-1.622-3.628-3.625-3.632zM12.604 23.711l-3.189 3.051c-0.127 0.126-0.302 0.203-0.495 0.203-0.002 0-0.004 0-0.007-0h0c-0.201-0.001-0.382-0.081-0.516-0.211l-1.736-1.736c-0.131-0.131-0.212-0.312-0.212-0.512 0-0.4 0.324-0.724 0.724-0.724 0.2 0 0.381 0.081 0.512 0.212l1.235 1.235 2.68-2.557c0.13-0.125 0.307-0.202 0.501-0.202 0.206 0 0.391 0.086 0.523 0.223l0 0c0.125 0.128 0.202 0.304 0.202 0.498 0 0.204-0.086 0.389-0.223 0.519l-0 0zM12.604 16.447l-3.189 3.051c-0.127 0.126-0.302 0.203-0.495 0.203-0.002 0-0.005 0-0.007-0h0c-0.201-0.001-0.382-0.081-0.516-0.21l0 0-1.736-1.736c-0.131-0.131-0.212-0.312-0.212-0.512 0-0.4 0.324-0.724 0.724-0.724 0.2 0 0.381 0.081 0.512 0.212v0l1.235 1.235 2.68-2.557c0.13-0.125 0.307-0.202 0.501-0.202 0.205 0 0.391 0.086 0.523 0.223l0 0c0.125 0.129 0.202 0.304 0.202 0.498 0 0.204-0.086 0.389-0.223 0.519l-0 0zM12.604 9.182l-3.189 3.051c-0.127 0.126-0.302 0.203-0.495 0.203-0.002 0-0.005 0-0.007-0h0c-0.201-0.001-0.382-0.081-0.516-0.21l0 0-1.736-1.737c-0.131-0.131-0.212-0.312-0.212-0.512 0-0.4 0.324-0.724 0.724-0.724 0.2 0 0.381 0.081 0.512 0.212l1.235 1.235 2.68-2.557c0.13-0.125 0.307-0.202 0.501-0.202 0.205 0 0.391 0.086 0.523 0.223l0 0c0.125 0.129 0.202 0.304 0.202 0.498 0 0.204-0.086 0.389-0.223 0.519l-0 0zM24.895 25.44h-8.354c-0.401 0-0.726-0.325-0.726-0.726s0.325-0.726 0.726-0.726v0h8.354c0.401 0 0.727 0.325 0.727 0.727s-0.325 0.727-0.727 0.727v0zM24.895 18.176h-8.354c-0.401 0-0.727-0.325-0.727-0.727s0.325-0.727 0.727-0.727v0h8.354c0.401 0 0.727 0.325 0.727 0.727s-0.325 0.727-0.727 0.727v0zM24.895 10.911h-8.354c-0.401 0-0.727-0.325-0.727-0.727s0.325-0.727 0.727-0.727v0h8.354c0.401 0 0.727 0.325 0.727 0.727s-0.325 0.727-0.727 0.727v0z"></path></svg>,
      contact: <svg className='header__item-icon-contact' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32"><path d="M26.948 12.168v-1.23c0-2.945-1.042-5.681-2.931-7.711-1.936-2.084-4.598-3.227-7.503-3.227h-1.015c-2.904 0-5.566 1.143-7.503 3.227-1.889 2.030-2.931 4.766-2.931 7.711v1.23c-2.292 0.155-4.114 2.064-4.114 4.397v1.923c0 2.427 1.976 4.403 4.403 4.403h2.481c0.444 0 0.807-0.363 0.807-0.807v-9.123c0-0.444-0.363-0.807-0.807-0.807h-1.156v-1.217c0-5.318 3.792-9.324 8.813-9.324h1.015c5.029 0 8.813 4.007 8.813 9.324v1.217h-1.156c-0.444 0-0.807 0.363-0.807 0.807v9.116c0 0.444 0.363 0.807 0.807 0.807h1.129c-0.329 4.208-3.227 5.183-4.571 5.405-0.37-1.136-1.439-1.956-2.696-1.956h-2.017c-1.56 0-2.83 1.271-2.83 2.83s1.271 2.837 2.83 2.837h2.024c1.304 0 2.4-0.887 2.729-2.084 0.659-0.094 1.701-0.329 2.736-0.934 1.459-0.854 3.187-2.595 3.415-6.104 2.306-0.141 4.134-2.057 4.134-4.397v-1.923c0.007-2.326-1.808-4.242-4.101-4.39zM7.042 21.271h-1.674c-1.54 0-2.79-1.25-2.79-2.79v-1.923c0-1.54 1.25-2.79 2.79-2.79h1.674v7.503zM18.034 30.387h-2.024c-0.672 0-1.217-0.545-1.217-1.217s0.545-1.217 1.217-1.217h2.024c0.672 0 1.217 0.545 1.217 1.217s-0.545 1.217-1.217 1.217zM29.442 18.481c0 1.54-1.25 2.79-2.79 2.79h-1.674v-7.503h1.674c1.54 0 2.79 1.25 2.79 2.79v1.923z"></path></svg>,
      coin: <svg viewBox="0 0 32 32"><path d="M16.16 7.697c-4.364 0-7.913 3.55-7.913 7.913s3.55 7.913 7.913 7.913 7.913-3.549 7.913-7.912c0-4.363-3.55-7.913-7.913-7.913z"></path><path d="M16.16 26.731c-6.131 0-11.121-4.99-11.121-11.121s4.99-11.121 11.121-11.121c6.131 0 11.121 4.99 11.121 11.121s-4.99 11.121-11.121 11.121zM16.16 0c-8.621 0-15.61 6.988-15.61 15.609s6.988 15.61 15.609 15.61c8.621 0 15.61-6.988 15.61-15.609s-6.988-15.61-15.609-15.61z"></path></svg>,
      ladder: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m350.5 12.278a26.488 26.488 0 0 0 -26.5 26.2v46.522h-136v-46.523a26.5 26.5 0 0 0 -53 0v435.046a26.5 26.5 0 0 0 53 0v-46.523h136v46.523a26.5 26.5 0 0 0 53 0v-435.046a26.488 26.488 0 0 0 -26.5-26.199zm-178.5 461.245a10.5 10.5 0 0 1 -21 0v-435.046a10.5 10.5 0 0 1 21 0zm152-62.523h-136v-13h136zm0-29h-136v-54h136zm0-70h-136v-13h136zm0-29h-136v-54h136zm0-70h-136v-13h136zm0-29h-136v-54h136zm0-70h-136v-13h136zm37 359.523a10.5 10.5 0 0 1 -21 0v-435.046a10.5 10.5 0 0 1 21 0z" data-original="#000000" data-old_color="#000000" /></g></svg>,
      dice: <svg viewBox="0 0 511.99933 511"><path xmlns="http://www.w3.org/2000/svg" d="m281.082031 62.140625c-15.9375-2.476563-30.957031 8.460937-33.488281 24.421875-1.207031 7.734375.667969 15.472656 5.28125 21.785156 4.613281 6.316406 11.414062 10.457032 19.148438 11.660156 1.523437.238282 3.039062.351563 4.535156.351563 14.175781 0 26.671875-10.324219 28.929687-24.742187 2.484375-15.925782-8.449219-30.9375-24.375-33.46875-.011719-.003907-.019531-.003907-.03125-.007813zm4.667969 30.394531c-.789062 5.058594-5.570312 8.527344-10.648438 7.734375-2.464843-.382812-4.628906-1.699219-6.09375-3.707031-1.464843-2.003906-2.058593-4.460938-1.679687-6.894531.730469-4.601563 4.722656-7.898438 9.238281-7.898438.46875 0 .945313.035157 1.425782.109375 5.066406.8125 8.546874 5.59375 7.757812 10.65625zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m313.449219 162.417969c-1.226563 7.710937.632812 15.4375 5.234375 21.765625 4.617187 6.34375 11.421875 10.5 19.167968 11.710937 1.519532.238281 3.027344.355469 4.523438.351563 14.15625 0 26.671875-10.316406 28.964844-24.742188 1.207031-7.730468-.667969-15.46875-5.277344-21.792968-4.613281-6.328126-11.417969-10.476563-19.15625-11.679688h.003906c-15.964844-2.488281-30.976562 8.464844-33.460937 24.386719zm36.472656-.9375c1.46875 2.015625 2.0625 4.480469 1.683594 6.914062-.808594 5.070313-5.601563 8.546875-10.675781 7.761719-2.457032-.382812-4.621094-1.707031-6.089844-3.726562-1.457032-2.003907-2.046875-4.441407-1.65625-6.902344.71875-4.585938 4.691406-7.871094 9.203125-7.871094.476562 0 .960937.035156 1.445312.113281 2.457031.382813 4.621094 1.699219 6.089844 3.710938zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m382.589844 268.117188c4.613281 6.324218 11.417968 10.476562 19.152344 11.679687 1.527343.242187 3.058593.359375 4.578124.359375 6.152344 0 12.128907-1.9375 17.199219-5.632812 6.332031-4.613282 10.480469-11.410157 11.6875-19.140626 1.207031-7.722656-.667969-15.457031-5.28125-21.777343-4.617187-6.320313-11.417969-10.46875-19.152343-11.675781-15.960938-2.488282-30.96875 8.449218-33.460938 24.390624-1.207031 7.734376.667969 15.472657 5.277344 21.796876zm14.460937-18.710938c.714844-4.574219 4.6875-7.847656 9.191407-7.847656.480468 0 .964843.035156 1.449218.113281h.007813c2.457031.382813 4.621093 1.703125 6.089843 3.714844 1.464844 2.007812 2.0625 4.460937 1.679688 6.914062s-1.703125 4.613281-3.714844 6.078125c-2.011718 1.46875-4.476562 2.066406-6.933594 1.679688-2.460937-.382813-4.621093-1.699219-6.089843-3.710938-1.46875-2.015625-2.066407-4.480468-1.679688-6.941406zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m502.109375 53.855469c-8.085937-11.085938-19.964844-18.351563-33.445313-20.464844l-56.15625-8.78125c-5.4375-.851563-10.5625 2.875-11.410156 8.328125-.855468 5.449219 2.875 10.558594 8.324219 11.410156l56.152344 8.78125c8.210937 1.285156 15.453125 5.726563 20.398437 12.5 4.941406 6.773438 6.953125 15.019532 5.664063 23.21875l-32.316407 206.1875c-2.414062 15.402344-15.769531 26.441406-30.90625 26.441406-1.589843 0-3.199218-.121093-4.820312-.375l-112.203125-17.570312v-69.972656c0-28.25-22.996094-51.234375-51.261719-51.234375h-57.863281l21.214844-135.417969c1.285156-8.210938 5.734375-15.453125 12.523437-20.398438 6.777344-4.933593 15.019532-6.9375 23.226563-5.640624l71.71875 11.273437c5.441406.855469 10.5625-2.867187 11.417969-8.316406.855468-5.449219-2.867188-10.5625-8.316407-11.417969l-71.710937-11.273438c-13.476563-2.128906-27 1.148438-38.097656 9.226563-11.105469 8.085937-18.382813 19.964844-20.5 33.453125l-21.695313 138.515625h-130.785156c-28.265625-.003906-51.261719 22.980469-51.261719 51.230469v208.679687c0 28.265625 22.996094 51.257813 51.261719 51.257813h208.867187c28.265625 0 51.261719-22.992188 51.261719-51.257813v-118.484375l109.125 17.085938c2.65625.414062 5.292969.613281 7.898437.613281 24.804688 0 46.6875-18.089844 50.644532-43.324219l32.316406-206.183594c2.113281-13.476562-1.175781-27.003906-9.265625-38.089843zm-210.695313 388.382812c0 17.246094-14.035156 31.28125-31.285156 31.28125h-208.867187c-17.25 0-31.285157-14.035156-31.285157-31.28125v-208.679687c0-17.234375 14.035157-31.253906 31.285157-31.253906h139.304687.039063.03125 69.492187c17.25 0 31.28125 14.019531 31.28125 31.253906v208.679687zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m79.242188 239.714844c-16.152344 0-29.292969 13.132812-29.292969 29.277344 0 16.144531 13.140625 29.28125 29.292969 29.28125 16.167968 0 29.320312-13.136719 29.320312-29.28125 0-16.144532-13.152344-29.277344-29.320312-29.277344zm0 38.578125c-5.136719 0-9.316407-4.171875-9.316407-9.300781 0-5.125 4.179688-9.300782 9.316407-9.300782 5.152343 0 9.34375 4.175782 9.34375 9.300782 0 5.128906-4.191407 9.300781-9.34375 9.300781zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m156.035156 304.496094c-16.152344 0-29.292968 13.136718-29.292968 29.277344 0 16.160156 13.140624 29.308593 29.292968 29.308593s29.292969-13.144531 29.292969-29.308593c0-16.140626-13.140625-29.277344-29.292969-29.277344zm0 38.609375c-5.136718 0-9.316406-4.183594-9.316406-9.328125 0-5.128906 4.179688-9.300782 9.316406-9.300782 5.136719 0 9.316406 4.171876 9.316406 9.300782 0 5.144531-4.179687 9.328125-9.316406 9.328125zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m232.121094 240.023438c-16.152344 0-29.292969 13.136718-29.292969 29.28125 0 16.144531 13.140625 29.277343 29.292969 29.277343 16.167968 0 29.320312-13.132812 29.320312-29.277343 0-16.144532-13.15625-29.28125-29.320312-29.28125zm0 38.582031c-5.136719 0-9.316406-4.171875-9.316406-9.300781 0-5.128907 4.179687-9.300782 9.316406-9.300782 5.152344 0 9.34375 4.171875 9.34375 9.300782 0 5.128906-4.191406 9.300781-9.34375 9.300781zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m79.242188 377.210938c-16.152344 0-29.292969 13.132812-29.292969 29.277343s13.140625 29.28125 29.292969 29.28125c16.167968 0 29.320312-13.136719 29.320312-29.28125s-13.152344-29.277343-29.320312-29.277343zm0 38.578124c-5.136719 0-9.316407-4.171874-9.316407-9.300781 0-5.128906 4.179688-9.300781 9.316407-9.300781 5.152343 0 9.34375 4.171875 9.34375 9.300781 0 5.128907-4.191407 9.300781-9.34375 9.300781zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m232.121094 377.523438c-16.152344 0-29.292969 13.132812-29.292969 29.277343s13.140625 29.28125 29.292969 29.28125c16.167968 0 29.320312-13.136719 29.320312-29.28125s-13.15625-29.277343-29.320312-29.277343zm0 38.578124c-5.136719 0-9.316406-4.171874-9.316406-9.300781 0-5.128906 4.179687-9.300781 9.316406-9.300781 5.152344 0 9.34375 4.171875 9.34375 9.300781 0 5.128907-4.191406 9.300781-9.34375 9.300781zm0 0" data-original="#000000" /><path xmlns="http://www.w3.org/2000/svg" d="m370.34375 38.242188.171875.027343c.554687.09375 1.105469.140625 1.652344.140625 4.796875 0 9.027343-3.464844 9.839843-8.347656.90625-5.441406-2.769531-10.589844-8.207031-11.496094l-.171875-.027344c-5.453125-.910156-10.589844 2.769532-11.496094 8.210938-.90625 5.4375 2.769532 10.585938 8.210938 11.492188zm0 0" data-original="#000000" /></svg>

   }
   return {
      svg
   }
} 
