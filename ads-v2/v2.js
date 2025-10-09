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

    // Layout86 Number Animation Logic
    function animateNumbers() {
        // Desktop selectors
        const desktopNumbers = document.querySelectorAll('.Layout86 .Number');
        // Mobile selectors  
        const mobileNumbers = document.querySelectorAll('.Layout86__number-text');
        
        const allNumbers = [...desktopNumbers, ...mobileNumbers];
        
        if (allNumbers.length === 0) return;
        
        // Define the number sequences
        const sequences = [
            [0, 11, 23, 35, 46, 57], // First column: 0% -> 57%
            [0, 1, 3, 4, 5, 7, 9]     // Second column: 0% -> 9%
        ];
        
        allNumbers.forEach((numberElement, index) => {
            const sequence = sequences[index % 2]; // Alternate between sequences
            let isForward = true; // true = going to max, false = going to 0
            let isScrolling = false;
            let scrollStep = 0;
            const totalScrollSteps = 20; // Number of steps for scroll wheel effect (1 second total)
            const scrollDuration = 1000; // 1 second scroll time
            const stepInterval = scrollDuration / totalScrollSteps; // ~50ms per step
            
            function updateNumber() {
                if (isScrolling) {
                    // Scroll wheel phase - smooth scrolling through sequence
                    if (isForward) {
                        // Scroll forward: 0 -> max
                        const displayIndex = scrollStep % sequence.length;
                        numberElement.innerHTML = sequence[displayIndex] + '%';
                        scrollStep++;
                        
                        if (scrollStep >= totalScrollSteps) {
                            // End scrolling, show target value
                            isScrolling = false;
                            scrollStep = 0;
                            numberElement.innerHTML = sequence[sequence.length - 1] + '%'; // Show max value
                            
                            // Wait 5 seconds then start reverse scroll
                            setTimeout(() => {
                                isForward = false;
                                isScrolling = true;
                            }, 5000);
                        }
                    } else {
                        // Scroll backward: max -> 0
                        const displayIndex = (sequence.length - 1) - (scrollStep % sequence.length);
                        numberElement.innerHTML = sequence[displayIndex] + '%';
                        scrollStep++;
                        
                        if (scrollStep >= totalScrollSteps) {
                            // End scrolling, show target value
                            isScrolling = false;
                            scrollStep = 0;
                            numberElement.innerHTML = sequence[0] + '%'; // Show 0%
                            
                            // Wait 5 seconds then start forward scroll
                            setTimeout(() => {
                                isForward = true;
                                isScrolling = true;
                            }, 5000);
                        }
                    }
                }
            }
            
            // Initial display - both start at 0%
            numberElement.innerHTML = '0%';
            
            // Start first scroll after 1 second
            setTimeout(() => {
                isScrolling = true;
            }, 1000);
            
            // Start animation - smooth scroll wheel (50ms)
            const interval = setInterval(updateNumber, stepInterval); // Update every ~50ms
            
            // Store interval for potential cleanup
            numberElement.animationInterval = interval;
        });
    }
    
    // Start the animation
    animateNumbers();
    
    // Comparison Price Animation Logic
    function animateComparisonPrices() {
        // Desktop selectors
        const desktopPrices = document.querySelectorAll('.comparison__total-cost');
        // Mobile selectors  
        const mobilePrices = document.querySelectorAll('.Comparison__total-price-text');
        
        const allPrices = [...desktopPrices, ...mobilePrices];
        
        if (allPrices.length === 0) return;
        
        // Define the price sequence
        const priceSequence = ['$0', '$23-42', '$56-76', '$137-178', '$213-339', '$295-440'];
        
        allPrices.forEach((priceElement) => {
            let isForward = true; // true = going to max, false = going to 0
            let isScrolling = false;
            let scrollStep = 0;
            const totalScrollSteps = 20; // Number of steps for scroll wheel effect (1 second total)
            const scrollDuration = 1000; // 1 second scroll time
            const stepInterval = scrollDuration / totalScrollSteps; // ~50ms per step
            
            function updatePrice() {
                if (isScrolling) {
                    // Scroll wheel phase - smooth scrolling through sequence
                    if (isForward) {
                        // Scroll forward: $0 -> $295-440
                        const displayIndex = scrollStep % priceSequence.length;
                        priceElement.innerHTML = priceSequence[displayIndex];
                        scrollStep++;
                        
                        if (scrollStep >= totalScrollSteps) {
                            // End scrolling, show target value
                            isScrolling = false;
                            scrollStep = 0;
                            priceElement.innerHTML = priceSequence[priceSequence.length - 1]; // Show max value
                            
                            // Wait 5 seconds then start reverse scroll
                            setTimeout(() => {
                                isForward = false;
                                isScrolling = true;
                            }, 5000);
                        }
                    } else {
                        // Scroll backward: $295-440 -> $0
                        const displayIndex = (priceSequence.length - 1) - (scrollStep % priceSequence.length);
                        priceElement.innerHTML = priceSequence[displayIndex];
                        scrollStep++;
                        
                        if (scrollStep >= totalScrollSteps) {
                            // End scrolling, show target value
                            isScrolling = false;
                            scrollStep = 0;
                            priceElement.innerHTML = priceSequence[0]; // Show $0
                            
                            // Wait 5 seconds then start forward scroll
                            setTimeout(() => {
                                isForward = true;
                                isScrolling = true;
                            }, 5000);
                        }
                    }
                }
            }
            
            // Initial display - start at $0
            priceElement.innerHTML = '$0';
            
            // Start first scroll after 2 seconds (delay after Layout86)
            setTimeout(() => {
                isScrolling = true;
            }, 2000);
            
            // Start animation - smooth scroll wheel (50ms)
            const interval = setInterval(updatePrice, stepInterval); // Update every ~50ms
            
            // Store interval for potential cleanup
            priceElement.animationInterval = interval;
        });
    }
    
    // Start the price animation
    animateComparisonPrices();
});