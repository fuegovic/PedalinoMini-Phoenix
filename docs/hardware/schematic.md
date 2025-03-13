# Schematic

<div id="myImageContainer">
    <img id="myImage" src="../../assets/Schematic_PedalinoMini.webp" alt="Schematic PedalinoMini">
    <button id="openModal" class="modal-button" title="View full size">⤢</button>
</div>

<div id="imageModal" class="modal">
  <span class="close-modal">&times;</span>
  <div id="modalImageContainer">
    <img id="modalImage" src="" alt="Schematic PedalinoMini (Full Size)">
  </div>
</div>

<script>
// Function to initialize PanZoom
function initPanZoom() {
    const element = document.getElementById('myImage');
    const container = document.getElementById('myImageContainer');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalContainer = document.getElementById('modalImageContainer');
    const closeBtn = document.querySelector('.close-modal');
    const openModalBtn = document.getElementById('openModal');
    
    // Check if elements exist
    if (!element || !container) {
        console.error('Required elements not found');
        return;
    }
    
    // Check if Panzoom is available
    if (typeof Panzoom !== 'function') {
        console.error('PanZoom library not loaded');
        // Try to load it again or wait for it
        setTimeout(initPanZoom, 500); // Retry after 500ms
        return;
    }

    // Clear any existing event listeners to prevent duplicates
    container.removeEventListener('wheel', container._wheelHandler);
    container.removeEventListener('dblclick', container._dblclickHandler);
    
    // Initialize PanZoom
    const initializePanzoom = function() {
        // Calculate initial scale to fit the image's width to the container's width
        const initialScale = container.offsetWidth / element.offsetWidth;

        const panzoom = Panzoom(element, {
            maxScale: 10,
            minScale: initialScale,
            contain: null,  // Remove 'contain' to allow overflowing height
            startScale: initialScale
        });

        // Store handlers as properties to be able to remove them later
        container._wheelHandler = function(event) {
            if (event.target === container || event.target === element) {
                panzoom.zoomWithWheel(event);
            }
        };
        container._dblclickHandler = function() {
            panzoom.reset();
        };

        // Add event listeners
        container.addEventListener('wheel', container._wheelHandler);
        container.addEventListener('dblclick', container._dblclickHandler);
        
        // Modal functionality
        if (openModalBtn) {
            openModalBtn.addEventListener('click', function() {
                // Set modal image source
                modalImage.src = element.src;
                
                // Show modal
                modal.style.display = 'flex';
                
                // Initialize PanZoom on modal image
                const modalPanzoom = Panzoom(modalImage, {
                    maxScale: 20,
                    minScale: 0.5,
                    contain: 'outside'
                });
                
                // Add event handlers for modal
                modalContainer._wheelHandler = function(event) {
                    modalPanzoom.zoomWithWheel(event);
                    event.preventDefault();
                };
                
                modalContainer._dblclickHandler = function() {
                    modalPanzoom.reset();
                };
                
                modalContainer.addEventListener('wheel', modalContainer._wheelHandler);
                modalContainer.addEventListener('dblclick', modalContainer._dblclickHandler);
            });
        }
        
        // Close modal when clicking the X
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
                
                // Clean up modal event listeners
                if (modalContainer._wheelHandler) {
                    modalContainer.removeEventListener('wheel', modalContainer._wheelHandler);
                }
                if (modalContainer._dblclickHandler) {
                    modalContainer.removeEventListener('dblclick', modalContainer._dblclickHandler);
                }
            });
        }
        
        // Close modal when clicking outside the image
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                
                // Clean up modal event listeners
                if (modalContainer._wheelHandler) {
                    modalContainer.removeEventListener('wheel', modalContainer._wheelHandler);
                }
                if (modalContainer._dblclickHandler) {
                    modalContainer.removeEventListener('dblclick', modalContainer._dblclickHandler);
                }
            }
        });
        
        console.log('PanZoom initialized successfully');
    };

    // Handle loading state
    if (element.complete) {
        initializePanzoom();
    } else {
        element.onload = initializePanzoom;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPanZoom);

// For partial page refreshes/navigation
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Document already loaded, initialize now
    setTimeout(initPanZoom, 100);
}

// For frameworks that might update the DOM after navigation
document.addEventListener('turbolinks:load', initPanZoom); // For Turbolinks
document.addEventListener('page:load', initPanZoom);       // For some other frameworks
window.addEventListener('popstate', function() {
    setTimeout(initPanZoom, 100);
});
</script>

<style>
#myImageContainer {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.modal-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    z-index: 100;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    justify-content: center;
    align-items: center;
}

#modalImageContainer {
    position: relative;
    width: 90%;
    height: 90%;
    max-width: 1500px;
}

#modalImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.close-modal {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1001;
}

.close-modal:hover {
    color: #bbb;
}

.panzoom-instructions {
    margin-top: 10px;
    text-align: center;
}
</style>

<div class="panzoom-instructions">
    <p><em>Tip: Use mouse wheel to zoom in/out. Double-click to reset view. Click the expand button to open in full screen.</em></p>
</div>

!!! warning "Floating Pins"
    You need to add pullup resistors on `P9` to `P14` (`ADC GPIOs`) otherwise pins will be floating. A floating pin can trigger unexpected MIDI events. As alternative you can disable the not used pedals via web interface.

---

## Switch Ladder 

To create your own ladder you can start simulating the below one:

<iframe src="https://www.falstad.com/circuit/circuitjs.html?ctz=CQAgjCAMB0l3BWKIBsAOESGUwUwLRhgBQATuAOwrgAsNIATAtWHcgw3GY87fQMwIGfZDQpdyg4a3p0MM5GHiRuckQjYKcHeNw30FKGji0gxugM6UWmqowrCTIAC6kArrmJWmN+j-uO4C7unlZSIuEMDorBHl5mNPJsalGBEK5xVvrqbKkxGaGoxiJG2tFOBdwAnL7WIia6APJ1efzCeRAqAO4t0f553TzUrUIBUMQ9kdEp5RMJGHnZA3NL0aVjKgDmdeFgdjRg1DgqAEogNSIXYAwYx2Y4-ND8yMfQCMQAHkFMSCgQTBg-PQTgBJAByAHFPqgzAxnlUqrDqECQABlAAyAFFMQA1THQwhIVjUCgQViIlEAFRBAAUADoWfg4-jcPbUXZ2AbgZTQsBoZ4MFDtMSMFBIAzUQAJhDAEDjAEmE0MFAr+IH4NCQgtk4ClMDFKHl0MECxVdG0RjM2pA0ugKD+Bq+CAQ-xQOBQ-GVzwlVpgbTA9rMGlFEAQ-GG5q91qEDH9BwMRDMdiIWoYBmgfJx0KdJnjCGiSYtKagNv10Jd8njKHE4FYBfoPpoGa+hyJ8bAVTjyYEjcYgmr-zQHdrjDe3f4bb7qrQZJrKLA0AHGaAA&editable=false&hideMenu=true&" width="800" height="400" frameborder="0"></iframe>

- [Circuit Simulation Applet](https://www.falstad.com/circuit/circuitjs.html?ctz=CQAgjCAMB0l3BWKIBsAOESGUwUwLRhgBQATuAJwBMIAzDVQOw33JVVxkhMsvp00cAFkadytfqyEohA5GHiQu02awQocrHO3hd1mminVzhozgGdKvK+A3yQAF1IBXXMUs85nsHZwQnru50knwYPjh+ji5ulipyceH2ATGYdmp2iZHJQUYocrm2EeBRgeRE1mDUJuC6API2iUJhGVDEAO4Ndt6+7dzMhcHNEb0SQyAJPR0TOPoDSh2ziQWZxADmNlRCflW0kLLDAErgYBUntsjCmtC0F1DQCMQAHuCM4EI3jK9g0uPcsgcASQAcgBxJ7cFhEY5IWjfX6bEAAZQAMgBRVEANVR4IgtFkaFetFesgRABUAQAFAA65loGNoXEqDC2nSKCl0z0qFHA2G4KBuYAQN1kPhAgATCGAIDGAJMJwUxud9uRIIIKaCK8hLoLkZeCiSKhNyhMZVb9RZqUCgwDrnuovk1UAaeRB1eKYPQrbLniI-I6EAgaCaXZr-VRreNdiBCOMqmq-uBoGA0Bjwf68lGEGgMLGETALcnnigEVH0Hls-trkJ8+A0BAo1QFNx4aoq1QELXcXBGySSfcq7RaEgo7QKK8y-G0JXiEA)
