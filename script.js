let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    var tl = gsap.timeline({scrollTrigger:{
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        delay: 0,
    }})
    
    tl.to("#onion",{
        top: "125%",
        left: "10%",
    }, 'onion')
    
    tl.to("#basil", {
        top: "128%",
        left: "77%"
    }, 'onion')
    
    tl.to("#tomato", {
        top: "139%",
        left: "27%",
        width: "2%",
        zIndex: 100,
    }, 'onion')
    
    tl.to("#onionSlice", {
        top: "149%",
        left: "27%",
        width: "10%",
    }, 'onion')
    
    tl.to("#tomato-one", {
        top: "155%",
        left: "91%",
        width: "8%",
    }, 'onion')
    
    tl.to("#tomato-two", {
        top: "179%",
        left: "3%",
        width: "10%",
    }, 'onion')
    
    tl.to("#tomato-three", {
        top: "179%",
        left: "7%",
        width: "10%",
    }, 'onion')
    
    tl.to("#pizzaAnime", {
        top: "179%",
        left: "70%",
        width: "10%",
        rotation: "190"
    }, 'onion')

    var tl2 = gsap.timeline({scrollTrigger:{
        trigger: ".three",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
    }})
    
    tl2.from(".pepperoni", {
        rotate: "-90deg",
        left: "-50%",
        top: "110%",
        zIndex: 99,
    }, 'pizza')
    
    tl2.from(".vegPizza", {
        rotate: "-90deg",
        left: "-50%",
        top: "110%",
        zIndex: 9,
    }, 'pizza')
    
    tl2.to("#onion", {
        top: "210%",
        left: "35%",
        width: "30%",
    }, 'pizza')
    
    tl2.to("#basil", {
        top: "249%",
        left: "49%",
        width: "14%",
        zIndex: 2,
    }, 'pizza')
    
    tl2.to("#tomato", {
        top: "242%",
        left: "17%",
        width: "14%",
    }, 'pizza')
    
    tl2.to("#onionSlice", {
        top: "243%",
        left: "70%",
        width: "10%",
        zIndex: 1,
    }, 'pizza')
});

mm.add("(max-width: 799px)", () => {
    var tl = gsap.timeline({scrollTrigger:{
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        delay: 0,
    }})
    
    tl.to("#onion",{
        top: "133%",
        left: "30%",
    }, 'onion')
    
    tl.to("#basil", {
        top: "162%",
        left: "63%"
    }, 'onion')
    
    tl.to("#tomato", {
        top: "139%",
        left: "35%",
        width: "2%",
        zIndex: 100,
    }, 'onion')
    
    tl.to("#onionSlice", {
        top: "133%",
        left: "30%",
        width: "10%",
    }, 'onion')
    
    tl.to("#tomato-one", {
        top: "125%",
        left: "60%",
        width: "20%",
    }, 'onion')
    
    tl.to("#tomato-two", {
        top: "190%",
        left: "3%",
        width: "10%",
    }, 'onion')
    
    tl.to("#tomato-three", {
        top: "190%",
        left: "7%",
        width: "10%",
    }, 'onion')
    
    tl.to("#pizzaAnime", {
        top: "190%",
        left: "70%",
        width: "20%",
        rotation: "290"
    }, 'onion')

    var tl2 = gsap.timeline({scrollTrigger:{
        trigger: ".three",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
    }})
    
    tl2.from(".pepperoni", {
        rotate: "-90deg",
        left: "-50%",
        top: "110%",
        zIndex: 99,
    }, 'pizza')
    
    tl2.from(".vegPizza", {
        rotate: "-90deg",
        left: "-50%",
        top: "110%",
        zIndex: 9,
    }, 'pizza')
    
    tl2.to("#onion", {
        top: "238%",
        left: "31%",
        width: "38%",
    }, 'pizza')
    
    tl2.to("#basil", {
        top: "283%",
        left: "49%",
        width: "14%",
        zIndex: 2,
    }, 'pizza')
    
    tl2.to("#tomato", {
        top: "210%",
        left: "54%",
        width: "14%",
    }, 'pizza')
    
    tl2.to("#onionSlice", {
        top: "253%",
        left: "59%",
        width: "10%",
        zIndex: 1,
    }, 'pizza')
});





VANTA.DOTS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
  })
  