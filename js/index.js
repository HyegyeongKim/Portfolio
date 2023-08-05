//loop 
$(window).on('load', function(){
    loopSet();
})

function loopSet(){
    let $loopWrap = $('.loop-wrap');
    let $loop = $('.loop-wrap .loop');
    let loopWrapWidth = '';
    let loopWidth = '';

    //clone
    let $clone = $loop.clone();
    $loopWrap.append($clone);
    loopAct();

    let oldWChk = window.innerWidth > 767 ? 'pc' : window.innerWidth < 766 ? 'ta' : 'mo';
    $(window).on('resize', function(){
        let newWChk = window.innerWidth > 767 ? 'pc' : window.innerWidth < 766 ? 'ta' : 'mo';
        if (newWChk != oldWChk) {
            oldWChk = newWChk;
            loopAct();
        }
    })

    function loopAct(){
        loopWrapWidth = $loopWrap.width();
        loopWidth = $loop.width();

        if (loopWidth < loopWrapWidth) {
            let loopCount = Math.ceil(loopWrapWidth * 2 / loopWidth);
            for (let i = 0; i < loopCount; i++){
                $clone = $clone.clone();
                $loopWrap.append($clone); 
            }
        }
    }
}

//modal
$(function(){
    const ipad = document.getElementById('modal-open');
    const modalWrap = document.querySelector('.modal-wrap');
    const overlay = modalWrap.querySelector('.modal-overlay');
    const closeBtn = modalWrap.querySelector('.modal-btn');

    const openModal = () => {
        modalWrap.classList.remove('hidden');
    }
    const closeModal = () => {
        modalWrap.classList.add('hidden');
    }

    overlay.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    ipad.addEventListener("click", openModal);
})


//typed and remove infinite
$(function(){
    let i = 0,
    j = 0;

    const textArray = ["Hi,\u00A0 I'm\u00A0 HK","I\u00A0 like\u00A0 Creative\u00A0 Design","I\u00A0 like\u00A0 Interactive\u00A0 Design"],
    speed = 145,
    target = document.getElementById('type');

        function txtnum(){
            j == textArray.length - 1
            ? j = 0
            : j ++
        }

        function type() {
            i < textArray[j].length
            ? (target.innerText += textArray[j].charAt(i), i++, setTimeout(type, speed))
            : remove()
        }
        
        function remove() {
            0 <= i
            ? (target.innerText = target.innerText.slice(0, i), i--, setTimeout(remove, speed))
            : (type(), txtnum())
        }
        
        type();
 });