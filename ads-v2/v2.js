document.addEventListener("DOMContentLoaded", function() {
    let closeIcon = document.querySelector("#close-btn .Icon");
    if (closeIcon) {
        closeIcon.addEventListener("click", function() {
            let banner = document.getElementById("Banner7");
            if (banner) {
                banner.style.display = "none";
            }
        });
    } else {
        console.log("Close icon not found");
    }
    function animateNumbers() {
        const desktopNumbers = document.querySelectorAll('.Layout86 .Number');
        const mobileNumbers = document.querySelectorAll('.Layout86__number-text');
        const allNumbers = [...desktopNumbers, ...mobileNumbers];
        if (allNumbers.length === 0) return;
        const sequences = [
            [0, 11, 23, 35, 46, 57], 
            [0, 1, 3, 4, 5, 7, 9]     
        ];
        allNumbers.forEach((numberElement, index) => {
            const sequence = sequences[index % 2]; 
            let isForward = true; 
            let isScrolling = false;
            let scrollStep = 0;
            const totalScrollSteps = 20; 
            const scrollDuration = 1000; 
            const stepInterval = scrollDuration / totalScrollSteps; 
            function updateNumber() {
                if (isScrolling) {
                    if (isForward) {
                        const displayIndex = scrollStep % sequence.length;
                        numberElement.innerHTML = sequence[displayIndex] + '%';
                        scrollStep++;
                        if (scrollStep >= totalScrollSteps) {
                            isScrolling = false;
                            scrollStep = 0;
                            numberElement.innerHTML = sequence[sequence.length - 1] + '%'; 
                            setTimeout(() => {
                                isForward = false;
                                isScrolling = true;
                            }, 5000);
                        }
                    } else {
                        const displayIndex = (sequence.length - 1) - (scrollStep % sequence.length);
                        numberElement.innerHTML = sequence[displayIndex] + '%';
                        scrollStep++;
                        if (scrollStep >= totalScrollSteps) {
                            isScrolling = false;
                            scrollStep = 0;
                            numberElement.innerHTML = sequence[0] + '%'; 
                            setTimeout(() => {
                                isForward = true;
                                isScrolling = true;
                            }, 5000);
                        }
                    }
                }
            }
            numberElement.innerHTML = '0%';
            setTimeout(() => {
                isScrolling = true;
            }, 1000);
            const interval = setInterval(updateNumber, stepInterval); 
            numberElement.animationInterval = interval;
        });
    }
    animateNumbers();
    function animateComparisonPrices() {
        const desktopPrices = document.querySelectorAll('.comparison__total-cost');
        const mobilePrices = document.querySelectorAll('.Comparison__total-price-text');
        const allPrices = [...desktopPrices, ...mobilePrices];
        if (allPrices.length === 0) return;
        const priceSequence = ['$0', '$23-42', '$56-76', '$137-178', '$213-339', '$295-440'];
        allPrices.forEach((priceElement) => {
            let isForward = true; 
            let isScrolling = false;
            let scrollStep = 0;
            const totalScrollSteps = 20; 
            const scrollDuration = 1000; 
            const stepInterval = scrollDuration / totalScrollSteps; 
            function updatePrice() {
                if (isScrolling) {
                    if (isForward) {
                        const displayIndex = scrollStep % priceSequence.length;
                        priceElement.innerHTML = priceSequence[displayIndex];
                        scrollStep++;
                        if (scrollStep >= totalScrollSteps) {
                            isScrolling = false;
                            scrollStep = 0;
                            priceElement.innerHTML = priceSequence[priceSequence.length - 1]; 
                            setTimeout(() => {
                                isForward = false;
                                isScrolling = true;
                            }, 5000);
                        }
                    } else {
                        const displayIndex = (priceSequence.length - 1) - (scrollStep % priceSequence.length);
                        priceElement.innerHTML = priceSequence[displayIndex];
                        scrollStep++;
                        if (scrollStep >= totalScrollSteps) {
                            isScrolling = false;
                            scrollStep = 0;
                            priceElement.innerHTML = priceSequence[0]; 
                            setTimeout(() => {
                                isForward = true;
                                isScrolling = true;
                            }, 5000);
                        }
                    }
                }
            }
            priceElement.innerHTML = '$0';
            setTimeout(() => {
                isScrolling = true;
            }, 2000);
            const interval = setInterval(updatePrice, stepInterval); 
            priceElement.animationInterval = interval;
        });
    }
    animateComparisonPrices();
});