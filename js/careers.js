// Careers Page JavaScript

// Open Application Form
function openApplicationForm(positionTitle = 'طلب عام - انضمام للفريق') {
    const modal = document.getElementById('applicationModal');
    const positionNameInput = document.getElementById('positionName');
    
    positionNameInput.value = positionTitle;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Open General Application
function openGeneralApplication() {
    openApplicationForm('طلب عام - انضمام للفريق');
}

// Close Application Form
function closeApplicationForm() {
    const modal = document.getElementById('applicationModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('applicationForm').reset();
    document.querySelector('.file-name').textContent = '';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('applicationModal');
    if (e.target === modal) {
        closeApplicationForm();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeApplicationForm();
    }
});

// File Upload Handler
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('cv');
    const fileName = document.querySelector('.file-name');
    
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                fileName.textContent = file.name;
            } else {
                fileName.textContent = '';
            }
        });
    }
});

// Application Form Submission
const applicationForm = document.getElementById('applicationForm');

if (applicationForm) {
    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(applicationForm);
        const data = {
            position: formData.get('positionName'),
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            experience: formData.get('experience'),
            education: formData.get('education'),
            coverLetter: formData.get('coverLetter'),
            cv: formData.get('cv').name
        };
        
        // Show loading state
        const submitBtn = applicationForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'جاري الإرسال...';
        
        // Simulate API call
        setTimeout(() => {
            // Show success message
            alert(`شكراً ${data.fullName}!\n\nتم استلام سيرتك الذاتية بنجاح.\n\nسنقوم بمراجعة طلبك والتواصل معك قريباً عبر:\nالبريد الإلكتروني: ${data.email}\nالجوال: ${data.phone}\n\nنتمنى لك التوفيق!`);
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            // Close modal and reset form
            closeApplicationForm();
            
            // Here you would typically send the data to a server
            console.log('Application Data:', data);
        }, 2000);
    });
}

console.log('💼 صفحة التوظيف جاهزة!');
