console.log(pdfjsLib);

// function startGame() {
//     const launchScreen = document.querySelector('.launch-screen');
//     launchScreen.style.animation = 'fadeOut 0.5s forwards';
//     setTimeout(() => {
//         launchScreen.style.display = 'none';
//         // Add your game start logic here
//     }, 500);
// }





// Optional: Add a fade-out animation to the CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { 
            opacity: 0;
            visibility: hidden;
        }
    }
`;


function startGame() { 
    const launchScreen = document.querySelector('.launch-screen'); 
    const popupScreen = document.getElementById('popup-screen');
    const imageScreen = document.getElementById('images//Samvidhan - Instruction.jpg');
    
    document.getElementById('backgroundMusic').play();

    // Fade out the launch screen 
    launchScreen.style.animation = 'fadeOut 0.5s forwards'; 
    setTimeout(() => { 
        launchScreen.style.display = 'none'; 
 
        // Show the image screen after 2 seconds 
        setTimeout(() => { 
            imageScreen.style.display = 'block';
            
            // Automatically hide the image after 10 seconds and show the popup
            setTimeout(() => {
                imageScreen.style.display = 'none';
                popupScreen.classList.add('show');
            }, 10000);
        }, 2000); 
    }, 500); 
} 


function continueToGame() { 
    const popupScreen = document.getElementById('popup-screen'); 
     
    // Hide the popup 
    popupScreen.classList.remove('show'); 
 
    // Continue with the game logic 
    console.log("Game started!"); // Replace this with your game start logic 
}


document.head.appendChild(style);


let rollingSound = new Audio('audio\\rpg-dice-rolling-95182.mp3');
let winSound = new Audio('audio\\winning_sound.mp3');
let lawyer = new Audio('audio\\lawyer_new_bg.mp3');
let car_move = new Audio('audio\\car_move.mp3');
let jail_bg = new Audio('audio\\jail_bg.mp3');
let police_bg = new Audio('audio\\police_bg.wav');
let car_placed = new Audio('audio\\car_placed.mp3');
let negative_beep = new Audio('audio\\negative_beeps.mp3');
let move_bg = new Audio('audio\\move_bg.wav');
let question_pop = new Audio('audio\\question_pop.mp3');
let wrong_ans = new Audio('audio\\wrong-ans.mp3');
let correct_ans = new Audio('audio\\correct-ans.mp3');

// let  = new Audio('audio\\car_placed.mp3.wav');


// Red player's position
let p1sum = 0;
// Question data (example questions, you can add more)


// Categorized Questions by Board Position Ranges
const questionCategories = {
    // Questions for board positions 1-10
    '1-10': [

        {
            question: 'Equality Before Law (Article 14 - Fundamental Right): You see two people, one wealthy and one poor, being treated differently at a public office. What will you do?',
            options: [
                'Demand equal treatment for both.',
                'Stay silent and walk away.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Right to Education (Article 21A - Fundamental Right): A child from a poor family is unable to go to school. What will you do?',
            options: [
                'Help the family enroll the child in a free school.',
                'Ignore the situation and move on.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Right Against Exploitation (Article 23 - Fundamental Right): You notice a child working in a factory. What will you do?',
            options: [
                'Report it to the authorities.',
                'Ignore it because it doesn’t affect you.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Promotion of Welfare of People (Article 38 - Directive Principle): A community lacks access to clean drinking water. What will you do?',
            options: [
                'Advocate for better facilities with local representatives.',
                'Assume someone else will take care of it.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Right to Freedom of Speech (Article 19 - Fundamental Right): Your neighbor is stopped from expressing their opinion at a public meeting. What will you do?',
            options: [
                'Support their right to speak.',
                'Let the restriction go unchallenged.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Equal Pay for Equal Work (Article 39 - Directive Principle): A woman at your workplace is paid less than a man for the same job. What will you do?',
            options: [
                'Raise the issue with the employer.',
                'Stay quiet to avoid conflict.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Right to Equality (Article 14): A school refuses admission to a child because of their caste. What will you do?',
            options: [
                'Report the discrimination to higher authorities.',
                'Ignore the situation as it doesn’t concern you.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Prohibition of Discrimination (Article 15): A restaurant denies entry to a particular community. What will you do?',
            options: [
                'Raise your voice against the discrimination.',
                'Choose a different restaurant and let it go.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Abolition of Untouchability (Article 17): A person from a lower caste is denied access to a temple. What will you do?',
            options: [
                'Support their right to enter.',
                'Avoid getting involved.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Freedom of Assembly (Article 19): A peaceful protest is interrupted by authorities without cause. What will you do?',
            options: [
                'Stand in solidarity with the protesters.',
                'Walk away to avoid trouble.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Right to Life (Article 21): A family’s house is demolished without proper notice. What will you do?',
            options: [
                'Help them file a complaint or seek legal help.',
                'Consider it none of your business.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Cultural and Educational Rights (Article 29): A minority language school is being shut down. What will you do?',
            options: [
                'Join a campaign to preserve the school.',
                'Accept it as part of progress.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Protection of Monuments (Article 49 - Directive Principle): You witness vandalism at a historical monument. What will you do?',
            options: [
                'Report the vandalism to the authorities.',
                'Ignore it as someone else’s responsibility.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Prohibition of Human Trafficking (Article 23): You suspect human trafficking in your neighborhood. What will you do?',
            options: [
                'Inform the police immediately.',
                'Mind your own business.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Protection of Environment (Article 48A - Directive Principle): Your community is facing severe pollution due to industrial waste. What will you do?',
            options: [
                'Organize a campaign for stricter environmental norms.',
                'Live with it as an inevitable issue.'
            ],
            correct: [0],
            image: ""
        },

        {
            question: 'Which of the following is NOT a Fundamental Right under the Indian Constitution?',
            options: [
                'Right to Equality',
                'Right to Property',
                'Right to Freedom of Religion',
                'Right to Constitutional Remedies'
            ],
            correct: [1],
            image: ""
        },
        {
            question: 'Equal Pay for Equal Work (Article 39): Women in a factory are paid less than men for the same work.',
            options: [
                'Raise the issue with the management.',
                'Let the workers handle it themselves.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Protection of Children (Article 39(e)): You see children being made to carry heavy loads in a construction site.',
            options: [
                'Inform child welfare authorities.',
                'Assume it’s not your responsibility.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Promotion of Education (Article 41): A village lacks schools for children.',
            options: [
                'Advocate for building schools in the area.',
                'Move on and leave it to the government.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Right to Work (Article 41): A disabled person struggles to find employment opportunities.',
            options: [
                'Guide them to government schemes for jobs.',
                'Ignore the issue and move on.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Provision of Just and Humane Conditions (Article 42): Workers in a factory are forced to work without proper safety gear.',
            options: [
                'Report it to labor authorities.',
                'Consider it an internal company matter.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Maternity Benefits (Article 42): A pregnant woman in your office is denied maternity leave.',
            options: [
                'Support her in seeking legal help.',
                'Stay neutral to avoid workplace issues.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Living Wage for Workers (Article 43): Laborers in your area are paid wages below the minimum standard.',
            options: [
                'Campaign for better wages with local unions.',
                'Assume the laborers will negotiate on their own.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Promotion of Cottage Industries (Article 43): A local craftsperson is struggling to sell their products.',
            options: [
                'Help them connect to government initiatives.',
                'Let the market dynamics decide their fate.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Promotion of Public Health (Article 47): A factory dumps waste near a residential area, causing health issues.',
            options: [
                'Report the issue to environmental authorities.',
                'Wait for someone else to act.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Eradication of Poverty (Article 47): You find families in your locality unable to afford basic necessities.',
            options: [
                'Organize support through local NGOs.',
                'Ignore it as a larger systemic issue.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Prevention of Alcohol Abuse (Article 47): Alcohol shops in your area encourage underage drinking.',
            options: [
                'Report the shops to the authorities.',
                'Assume it’s the parents’ responsibility.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Protection of Environment (Article 48A): A construction site in your area cuts down old trees.',
            options: [
                'Petition to stop deforestation.',
                'Accept it as development.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Animal Welfare (Article 48): You see animals being abused in a local market.',
            options: [
                'Report it to animal welfare groups.',
                'Ignore it to avoid confrontation.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Promotion of Village Panchayats (Article 40): A village lacks a functioning Panchayat system.',
            options: [
                'Advocate for local governance mechanisms.',
                'Leave it to the district authorities.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'Development of Weaker Sections (Article 46): Tribal communities near you lack access to basic education and healthcare.',
            options: [
                'Work with local NGOs to improve the situation.',
                'Assume the government will take care of it.'
            ],
            correct: [0],
            image: ""
        },
        {
            question: 'In a situation where a rich person is treated better than a poor person at an office, what should be done?',
            options: ['Ask for fair treatment', 'Do nothing'],
            correct: [0],
            image: ""
          },
          {
            question: 'When a person is stopped from entering a hotel because of their caste, the best action is to:',
            options: ['Speak up for them', 'Walk away'],
            correct: [0],
            image: ""
          },
          {
            question: 'If someone is asked not to sit with others because of their caste, the recommended action is:',
            options: ['Support the person', 'Stay silent'],
            correct: [0],
            image: ""
          },
          {
            question: 'When a person is not allowed to speak at a public meeting, what should be done?',
            options: ['Defend their right to speak', 'Ignore it'],
            correct: [0],
            image: ""
          },
          {
            question: 'If a child is not going to school, the best course of action is:',
            options: ['Help them get admission', 'Leave it'],
            correct: [0],
            image: ""
          },
          {
            question: 'When a worker is not being paid for their work, one should:',
            options: ['Tell the authorities', 'Do nothing'],
            correct: [0],
            image: ""
          },
          {
            question: 'If a child is working in a dangerous factory, the appropriate response is:',
            options: ['Report it', 'Walk away'],
            correct: [0],
            image: ""
          },
          {
            question: "When a person is forced to follow a religion they don't believe in, what should be done?",
            options: ['Support their choice', 'Ignore it'],
            correct: [0],
            image: ""
          },
          {
            question: 'If a small school for a minority community is being shut down, the recommended action is:',
            options: ['Support the school', 'Do nothing'],
            correct: [0],
            image: ""
          },
          {
            question: "When a person's rights are violated by an official, one should:",
            options: ['Tell them to go to court', 'Stay quiet'],
            correct: [0],
            image: ""
          },

          { question: 'If you see someone being bullied in school, you should:', options: ['Report it to a teacher', 'Join in the bullying', 'Ignore it', 'Laugh along'], correct: [0], image: "" },

          { question: 'When you notice littering in a public park, the best action is to:', options: ['Pick it up', 'Do nothing', 'Complain to someone', 'Join in the littering'], correct: [0], image: "" },

          { question: 'If you hear someone making racist comments, you should:', options: ['Speak up against it', 'Stay silent', 'Agree with them', 'Change the subject'], correct: [0], image: "" },

          { question: 'When a friend is being excluded from a group, you should:', options: ['Invite them to join', 'Ignore it', 'Join the exclusion', 'Laugh at them'], correct: [0], image: "" },


    ],

    '11-35': [


       


          // Directive Principles Questions
         

          { question: 'If you learn about a proposed law that could harm the environment, you should:', options: ['Attend public hearings to voice your concerns', 'Ignore it', 'Write a letter to your representative', 'Discuss it with friends'], correct: [0, 2], image: "" },

          { question: 'When you see a community member being unfairly treated by law enforcement, you should:', options: ['Document the incident and seek legal advice', 'Stay out of it', 'Confront the officer', 'Call a friend'], correct: [0], image: "" },

          { question: 'If your school is not providing equal opportunities for all students, you should:', options: ['Raise the issue with school authorities', 'Accept the status quo', 'Talk to your friends about it', 'Start a petition'], correct: [0, 3], image: "" },

          { question: 'When a local business is exploiting workers, the best action is to:', options: ['Support the workers in their fight for rights', 'Ignore the situation', 'Report the business to authorities', 'Join the business'], correct: [0, 2], image: "" },

          { question: 'If you are part of a community that lacks access to healthcare, you should:', options: ['Advocate for better services', 'Do nothing', 'Talk to local leaders', 'Organize a health camp'], correct: [0, 3], image: "" },

          { question: 'When you hear about a discriminatory practice in hiring, you should:', options: ['Report it to the relevant authorities', 'Stay silent', 'Discuss it with colleagues', 'Write an article about it'], correct: [0, 3], image: "" },

          { question: 'If a local school is not accommodating students with disabilities, you should:', options: ['Push for policy changes', 'Accept the situation', 'Talk to parents of affected students', 'Organize a meeting with school officials'], correct: [0, 3], image: "" },

          { question: 'When a community project is being planned without public input, you should:', options: ['Demand a public consultation', 'Let it happen', 'Attend the meeting and ask questions', 'Post about it on social media'], correct: [0, 2], image: "" },

          { question: 'If you notice a lack of transparency in local government decisions, you should:', options: ['Request access to public records', 'Ignore it', 'Discuss it with friends', 'Attend a town hall meeting'], correct: [0, 3], image: "" },

          { question: 'When you see misinformation being spread about a public issue, you should:', options: ['Correct the misinformation with facts', 'Stay out of it', 'Share the misinformation', 'Discuss it with your family'], correct: [0], image: "" },


          { question: 'If you learn about a proposed law that could harm the environment, you should:', options: ['Attend public hearings to voice your concerns', 'Ignore it'], correct: [0], image: "" },

          { question: 'When you see a community member being unfairly treated by law enforcement, you should:', options: ['Document the incident and seek legal advice', 'Stay out of it'], correct: [0], image: "" },
          
          { question: 'If your school is not providing equal opportunities for all students, you should:', options: ['Raise the issue with school authorities', 'Accept the status quo'], correct: [0], image: "" },
          
          { question: 'When a local business is exploiting workers, the best action is to:', options: ['Support the workers in their fight for rights', 'Ignore the situation'], correct: [0], image: "" },
          
          { question: 'If you are part of a community that lacks access to healthcare, you should:', options: ['Advocate for better services', 'Do nothing'], correct: [0], image: "" },
          
          { question: 'When you hear about a discriminatory practice in hiring, you should:', options: ['Report it to the relevant authorities', 'Stay silent'], correct: [0], image: "" },
          
          { question: 'If a local school is not accommodating students with disabilities, you should:', options: ['Push for policy changes', 'Accept the situation'], correct: [0], image: "" },
          
          { question: 'When a community project is being planned without public input, you should:', options: ['Demand a public consultation', 'Let it happen'], correct: [0], image: "" },
          
          { question: 'If you notice a lack of transparency in local government decisions, you should:', options: ['Request access to public records', 'Ignore it'], correct: [0], image: "" },
          
          { question: 'When you see misinformation being spread about a public issue, you should:', options: ['Correct the misinformation with facts', 'Stay out of it'], correct: [0], image: "" },

          

          {
            question: 'When a woman is paid less than a man for the same work, the best action is:',
            options: ['Ask for equal pay', 'Stay silent'],
            correct: [0],
            image: ""
          },
          {
            question: 'If children are working long hours in a factory, one should:',
            options: ['Inform the authorities', 'Ignore it'],
            correct: [0],
            image: ""
          },
          {
            question: 'When a person cannot find a job despite trying, the recommended action is:',
            options: ['Help them look for government schemes', 'Do nothing'],
            correct: [0],
            image: ""
          },
          {
            question: 'If workers in a factory are made to work without safety gear, one should:',
            options: ['Report it', 'Ignore it'],
            correct: [0],
            image: ""
          },
          {
            question: 'When a woman is not given leave during her pregnancy, the best response is:',
            options: ['Speak up for her rights', 'Stay quiet'],
            correct: [0],
            image: ""
          },
          {
            question: 'If laborers are paid very low wages, the appropriate action is:',
            options: ['Demand better wages', 'Ignore it'],
            correct: [0],
            image: ""
          },
          {
            question: 'When a local craftsperson is struggling to sell their products, one should:',
            options: ['Help promote their work', 'Do nothing'],
            correct: [0],
            image: ""
          },
          {
            question: 'If a factory is polluting the water in your area, the recommended action is:',
            options: ['Report the factory', 'Stay silent'],
            correct: [0],
            image: ""
          },
          {
            question: "When families in your neighborhood don't have enough to eat, one should:",
            options: ['Help them get support', 'Do nothing'],
            correct: [0],
            image: ""
          },
          {
            question: 'If alcohol is being sold to underage children in your area, the best response is:',
            options: ['Report it', 'Ignore it'],
            correct: [0],
            image: ""
          },
          {
            question: 'When trees are being cut down in a nearby forest, one should:',
            options: ['Stop or report it', 'Do nothing'],
            correct: [0],
            image: ""
          },
          {
            question: 'If you see someone hurting an animal, the appropriate action is:',
            options: ['Report it', 'Walk away'],
            correct: [0],
            image: ""
          },
          {
            question: 'When a village has no proper local government, one should:',
            options: ['Support setting up a Panchayat', 'Leave it to others'],
            correct: [0],
            image: ""
          },
          {
            question: "If a tribal community doesn't have schools or hospitals, the recommended action is:",
            options: ['Advocate for better facilities', 'Do nothing'],
            correct: [0],
            image: ""
          },
          {
            question: 'When garbage is being dumped in a public park, one should:',
            options: ['Raise awareness or report it', 'Ignore it'],
            correct: [0],
            image: ""
          },
          // The additional question about Fundamental Rights
          {
            question: 'Which of the following is NOT a Fundamental Right under the Indian Constitution?',
            options: ['Right to Equality', 'Right to Property', 'Right to Freedom of Religion', 'Right to Constitutional Remedies'],
            correct: [1],
            image: ""
          },

          { question: 'If you witness someone being discriminated against based on their religion, you should:', 
          options: ['Speak up against it', 'Ignore it'], 
          correct: [0],
           image: "" },

          { question: 'When a public official is misusing their power, one should:', options: ['Report the misconduct', 'Stay silent'], correct: [0], image: "" },

          { question: 'If a friend is being bullied at school, the best action is to:', options: ['Support your friend', 'Join in the bullying'], correct: [0], image: "" },

          { question: 'When you see a law being broken in your community, you should:', options: ['Report it to the authorities', 'Do nothing'], correct: [0], image: "" },

          { question: 'If you are aware of a local environmental issue, you should:', options: ['Raise awareness', 'Keep it to yourself'], correct: [0], image: "" },



    ],
    
    // Questions for board positions 41-50
    '36-50': [

        { question: 'If a government policy disproportionately affects a minority group, you should:', options: ['Challenge it through legal means', 'Accept it as necessary', 'Raise awareness in the community', 'Ignore it'], correct: [0, 2], image: "" },

        { question: 'If you are aware of a violation of constitutional rights in your community, you should:', options: ['Engage with civil rights organizations', 'Remain passive', 'Document the violation', 'Talk to local media'], correct: [0, 2], image: "" },

        { question: 'When a local government is not adhering to constitutional mandates, you should:', options: ['File a complaint with higher authorities', 'Ignore the issue', 'Discuss it with community leaders', 'Organize a protest'], correct: [0, 3], image: "" },
        
        { question: 'If a new law is proposed that you disagree with, you should:', options: ['Participate in a public discussion', 'Remain indifferent'], correct: [0], image: "" },

        { question: 'When a community is facing a lack of resources, one should:', options: ['Organize a community meeting', 'Wait for someone else to help'], correct: [0], image: "" },

        { question: 'If you find out that a local leader is corrupt, the best course of action is to:', options: ['Gather evidence and report it', 'Ignore it'], correct: [0], image: "" },

        { question: 'When you see a public space being misused, you should:', options: ['Inform the authorities', 'Let it be'], correct: [0], image: "" },

        { question: 'If you are part of a community that lacks representation, you should:', options: ['Advocate for your rights', 'Accept the situation'], correct: [0], image: "" },

        { question: 'If a government policy disproportionately affects a minority group, you should:', options: ['Challenge it through legal means', 'Accept it as necessary'], correct: [0], image: "" },

        { question: 'When a whistleblower exposes corruption, the appropriate response is to:', options: ['Support and protect the whistleblower', 'Disregard their claims'], correct: [0], image: "" },

        { question: 'If you are aware of a violation of constitutional rights in your community, you should:', options: ['Engage with civil rights organizations', 'Remain passive'], correct: [0], image: "" },

        { question: 'When a local government is not adhering to constitutional mandates, you should:', options: ['File a complaint with higher authorities', 'Ignore the issue'], correct: [0], image: "" },

        { question: 'If a law is enacted that restricts freedom of speech, you should:', options: ['Participate in peaceful protests against it', 'Accept it without question'], correct: [0], image: "" },

        { question: 'When you see systemic inequality in your community, the best action is to:', options: ['Work with others to address the issue', 'Stay uninvolved'], correct: [0], image: "" },

        { question: 'If a local organization is promoting hate speech, you should:', options: ['Speak out against it', 'Remain silent'], correct: [0], image: "" },

        { question: 'When a public figure is spreading false information about a community, you should:', options: ['Counter the misinformation with facts', 'Let it go unchallenged'], correct: [0], image: "" },

        { question: 'If you believe a law is unconstitutional, the best course of action is to:', options: ['Seek legal counsel to challenge it', 'Comply without question'], correct: [0], image: "" },



    ]
};




function createKeyUsagePopup(message, type) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1100';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';

    // Create popup container
    const popup = document.createElement('div');
    popup.style.backgroundColor = type === 'warning' ? '#fff3cd' : '#d4edda';
    popup.style.border = type === 'warning' ? '2px solid #ffeeba' : '2px solid #c3e6cb';
    popup.style.borderRadius = '15px';
    popup.style.padding = '30px';
    popup.style.maxWidth = '400px';
    popup.style.textAlign = 'center';
    popup.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    popup.style.transform = 'scale(0.7)';
    popup.style.opacity = '0';
    popup.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    // Add icon
    const icon = document.createElement('div');
    icon.style.fontSize = '4rem';
    icon.style.marginBottom = '20px';
    icon.innerHTML = type === 'warning' ? '⚠️' : '✅';

    // Add message text
    const messageText = document.createElement('p');
    messageText.innerText = message;
    messageText.style.fontSize = '1.2rem';
    messageText.style.marginBottom = '20px';
    messageText.style.color = type === 'warning' ? '#856404' : '#155724';

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'OK';
    closeButton.style.backgroundColor = type === 'warning' ? '#ffc107' : '#28a745';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.padding = '10px 30px';
    closeButton.style.borderRadius = '8px';
    closeButton.style.fontSize = '1rem';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'background-color 0.3s ease';

    closeButton.onmouseover = () => {
        closeButton.style.backgroundColor = type === 'warning' ? '#e0a800' : '#218838';
    };
    closeButton.onmouseout = () => {
        closeButton.style.backgroundColor = type === 'warning' ? '#ffc107' : '#28a745';
    };

    // Assemble popup
    popup.appendChild(icon);
    popup.appendChild(messageText);
    popup.appendChild(closeButton);
    overlay.appendChild(popup);

    // Add to body
    document.body.appendChild(overlay);

    // Trigger animation
    setTimeout(() => {
        overlay.style.opacity = '1';
        popup.style.transform = 'scale(1)';
        popup.style.opacity = '1';
    }, 10);

    // Close functionality
    function closePopup() {
        overlay.style.opacity = '0';
        popup.style.transform = 'scale(0.7)';
        popup.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    }

    closeButton.onclick = closePopup;

    // Close on outside click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closePopup();
        }
    };
}



// Function to get a random question based on the current board position
// function getQuestionForPosition(position) {
//     let category;

//     if (position >= 1 && position <= 10) {
//         category = '1-10';
//     } else if (position >= 11 && position <= 35) {
//         category = '11-35';
//     } else if (position >= 36 && position <= 50) {
//         category = '36-50';
//     } else {
//         console.error('Invalid board position');
//         return null;
//     }
    
//     const categoryQuestions = questionCategories[category];
    
//     // Return a random question from the appropriate category
//     return categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
// }



// A tracker for used questions in each category
const usedQuestions = {
    '1-10': new Set(),
    '11-35': new Set(),
    '36-50': new Set()
};

// Function to get a random question based on the current board position
function getQuestionForPosition(position) {
    let category;

    // Determine the category based on the position
    if (position >= 1 && position <= 10) {
        category = '1-10';
    } else if (position >= 11 && position <= 35) {
        category = '11-35';
    } else if (position >= 36 && position <= 50) {
        category = '36-50';
    } else {
        console.error('Invalid board position');
        return null;
    }

    const categoryQuestions = questionCategories[category];
    const totalQuestions = categoryQuestions.length;
    const usedSet = usedQuestions[category];

    // If all questions are used, reset the used set
    if (usedSet.size === totalQuestions) {
        usedSet.clear();
    }

    // Find a random question that hasn't been used yet
    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * totalQuestions);
    } while (usedSet.has(questionIndex));

    // Mark the question as used
    usedSet.add(questionIndex);

    // Return the selected question
    return categoryQuestions[questionIndex];
}





function shuffleOptions(question) {
    // Create a copy of the original question to avoid modifying the source
    const shuffledQuestion = { ...question };
    
    // Create an array of option objects with their original index
    const optionsWithIndices = question.options.map((option, originalIndex) => ({
        option,
        originalIndex
    }));

    // Shuffle the options using Fisher-Yates algorithm
    for (let i = optionsWithIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithIndices[i], optionsWithIndices[j]] = [optionsWithIndices[j], optionsWithIndices[i]];
    }

    // Update the question with shuffled options
    shuffledQuestion.options = optionsWithIndices.map(item => item.option);
    
    // Create a mapping to track the new indices of correct answers
    shuffledQuestion.correct = question.correct.map(correctIndex => 
        optionsWithIndices.findIndex(item => item.originalIndex === correctIndex)
    );

    return shuffledQuestion;
}


let questionActive = false;
let isLawyerActive = false; // Global variable to track key status

let isKeyActive = false; // Global variable to track key status

// Modify the showQuestion function to use the new getQuestionForPosition
function showQuestion(diceValue, currentPosition, callback) {

    question_pop.play()
    if (questionActive) return; // Prevent multiple modals
    questionActive = true;

    // Get a question based on the current board position and shuffle it
    let question = getQuestionForPosition(currentPosition);
    question = shuffleOptions(question);

    const numOptions = 4
    const options = question.options.slice(0, numOptions);

    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';

    // Create modal container
    const modal = document.createElement('div');
    modal.style.backgroundImage = `linear-gradient(135deg, 
        rgba(245, 235, 210, 1), 
        rgba(250, 240, 220, 1), 
        rgba(255, 248, 230, 1))`;
    modal.style.backgroundColor = 'rgba(245, 235, 210, 1)'; 
    modal.style.padding = '40px';
    modal.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.5)';
    modal.style.width = '95%'; 
    modal.style.maxWidth = '900px'; 
    modal.style.textAlign = 'center';
    modal.style.borderRadius = '15px';
    modal.style.overflowY = 'auto';
    modal.style.transform = 'scale(0.7)';
    modal.style.opacity = '0';
    modal.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    // Animation: Delay adding to DOM to trigger transition
    setTimeout(() => {
        overlay.style.opacity = '1';
        modal.style.transform = 'scale(1)';
        modal.style.opacity = '1';
    }, 10);

    // Add question text
    const questionText = document.createElement('h2');
    questionText.innerText = question.question;
    questionText.style.fontSize = '1.8rem';
    questionText.style.marginBottom = '25px';
    questionText.style.textAlign = 'left';
    modal.appendChild(questionText);

    // Add main image if available
    if (question.image) {
        const img = document.createElement('img');
        img.src = question.image; 
        img.alt = "Question Image";
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.marginBottom = '20px';
        img.style.borderRadius = '8px';
        modal.appendChild(img);
    }

    // Add timer
    const timerText = document.createElement('p');
    timerText.innerText = "Time Left: 30s";
    timerText.style.marginBottom = '20px';
    timerText.style.fontSize = '1.2rem';
    timerText.style.fontWeight = 'bold';
    modal.appendChild(timerText);

    // Start countdown timer
    let timer = 30;
    const timerInterval = setInterval(() => {
        timer--;
        timerText.innerText = `Time Left: ${timer}s`;
        if (timer <= 0) {
            clearInterval(timerInterval);
            closeModal();
            callback(false);
            createKeyUsagePopup("Time's up! You moved back one step.");
        }
    }, 1000);

    // Function to close modal
    function closeModal() {
        clearInterval(timerInterval);
        modal.style.transform = 'scale(0.7)';
        modal.style.opacity = '0';
        overlay.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
            questionActive = false;
        }, 300);
    }

    // Tracking key usage
    let keyUsageCount = 0;
    let isKeyUsed = false;

    // Create Key button
    const keyButton = document.createElement('button');
    keyButton.innerText = 'Use Key';
    keyButton.style.backgroundColor = isKeyActive ? 'green' : 'gray';
    keyButton.style.color = 'white';
    keyButton.style.padding = '10px 20px';
    keyButton.style.borderRadius = '8px';
    keyButton.style.marginBottom = '15px';
    keyButton.disabled = !isKeyActive;
    
    // Function to handle key usage
    function handleKeyUsage() {
        if (keyUsageCount < 2 && isKeyActive) {
            keyUsageCount++;
            isKeyUsed = true;
            
            // Inform the player about key usage
            if (keyUsageCount === 1) {
                createKeyUsagePopup("You have used the key. You now have two chances to answer the question correctly!", "warning");
            } else if (keyUsageCount === 2) {
                createKeyUsagePopup("This is your last chance! The key will be disabled after this.", "warning");
                keyButton.disabled = true;
                isKeyActive = false;
                updateKeyStatus(false);
            }
        }
    }

    // Key button click handler
    keyButton.onclick = handleKeyUsage;

    // Add key button above options
    modal.appendChild(keyButton);

    // Check if all options are images
    const allImages = options.every(opt => /\.(jpg|jpeg|png|gif)$/i.test(opt.trim()));

    // Add options as buttons
    const optionsContainer = document.createElement('div');
    optionsContainer.style.display = 'grid';
    
    if (options.length === 2) {
        // Two-option layout
        optionsContainer.style.gridTemplateColumns = '1fr 1fr';
        optionsContainer.style.gap = '30px';
    } else if (options.length === 4) {
        // Four-option layout
        optionsContainer.style.gridTemplateColumns = '1fr 1fr';
        optionsContainer.style.gap = '20px';
    }

    // Create Lawyer button
    const lawyerButton = document.createElement('button');
    lawyerButton.innerText = 'Use Lawyer';
    lawyerButton.style.backgroundColor = isLawyerActive ? 'green' : 'gray';
    lawyerButton.style.color = 'white';
    lawyerButton.style.padding = '10px 20px';
    lawyerButton.style.borderRadius = '8px';
    lawyerButton.style.marginBottom = '15px';
    lawyerButton.disabled = !isLawyerActive;
    
    // Lawyer button click handler
    lawyerButton.onclick = () => {
        // Get the correct answer index
        const correctAnswerIndex = question.correct[0];
        const correctAnswer = question.options[correctAnswerIndex];

        // Create lawyer help popup
        const lawyerPopup = document.createElement('div');
        lawyerPopup.style.position = 'fixed';
        lawyerPopup.style.top = '50%';
        lawyerPopup.style.left = '50%';
        lawyerPopup.style.transform = 'translate(-50%, -50%)';
        lawyerPopup.style.backgroundColor = 'white';
        lawyerPopup.style.padding = '2px';
        lawyerPopup.style.borderRadius = '10px';
        lawyerPopup.style.zIndex = '1100';
        lawyerPopup.style.textAlign = 'center';

        const lawyerAdvice = document.createElement('p');
        lawyerAdvice.innerHTML = `<strong>Lawyer's Advice:</strong><br>The correct answer is: ${correctAnswer}`;
        lawyerPopup.appendChild(lawyerAdvice);

        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.onclick = () => {
            document.body.removeChild(lawyerPopup);
        };
        lawyerPopup.appendChild(closeButton);

        document.body.appendChild(lawyerPopup);

        // Deactivate lawyer status
        isLawyerActive = false;
        lawyerButton.disabled = true;
        const statusBox = document.getElementById("lawyerStatusBox");
        statusBox.textContent = "Lawyer Not Active";
        statusBox.style.backgroundColor = "#ff4d4d"; // Red color
        lawyerButton.style.backgroundColor = 'gray';
    };

    // Add lawyer button above options
    modal.appendChild(lawyerButton);

    options.forEach((option, index) => {
        const button = document.createElement('button');
        // Extensive styling for buttons
        button.style.cursor = 'pointer';
        button.style.border = '2px solid #e0e0e0';
        button.style.borderRadius = '12px';
        button.style.backgroundColor = '#f9f9f9';
        button.style.fontSize = '1.2rem';
        button.style.transition = 'all 0.3s ease';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
        button.style.position = 'relative';
        button.style.padding = '15px';
        button.style.width = '100%';
        button.style.minHeight = options.length === 2 ? '200px' : '150px';
        button.style.overflow = 'hidden';
        button.style.textAlign = 'center';

        // Enhanced hover effects
        button.onmouseover = () => {
            button.style.backgroundColor = '#f0f0f0';
            button.style.transform = 'scale(1.03)';
            button.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            button.style.borderColor = '#c0c0c0';
        };
        button.onmouseout = () => {
            button.style.backgroundColor = '#f9f9f9';
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            button.style.borderColor = '#e0e0e0';
        };

        const optionLabel = `${String.fromCharCode(65 + index)}.)`; // Uppercase letters A, B, C, D

        const isImageOption = /\.(jpg|jpeg|png|gif)$/i.test(option.trim());

        if (isImageOption) {
            // Image option styling
            // Create a container for the image and label
            const imageContainer = document.createElement('div');
            imageContainer.style.position = 'relative';
            imageContainer.style.width = '100%';
            imageContainer.style.height = '100%';

            // Create img element
            const img = document.createElement('img');
            img.src = option;
            img.alt = `Option ${optionLabel}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover'; // Ensures the image covers the container
            img.style.borderRadius = '8px';
            img.style.transition = 'transform 0.3s ease';
            imageContainer.appendChild(img);

            // Create label overlay
            const label = document.createElement('span');
            label.innerText = optionLabel;
            label.style.position = 'absolute';
            label.style.top = '10px';
            label.style.left = '10px';
            label.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            label.style.padding = '5px 10px';
            label.style.borderRadius = '5px';
            label.style.fontWeight = 'bold';
            label.style.fontSize = '1rem';
            imageContainer.appendChild(label);

            // Add hover effect to image
            button.onmouseover = () => {
                img.style.transform = 'scale(1.05)';
                button.style.backgroundColor = 'transparent';
                button.style.transform = 'scale(1.02)';
            };
            button.onmouseout = () => {
                img.style.transform = 'scale(1)';
                button.style.backgroundColor = 'transparent';
                button.style.transform = 'scale(1)';
            };

            button.appendChild(imageContainer);
        } else {
            // Text option styling
            button.innerHTML = `<span style="font-weight: bold; margin-right: 10px;">${optionLabel}</span>${option}`;
            button.style.textAlign = 'left';
            button.style.width = '100%';
        }
        
        // Handle button click
        button.onclick = () => {
            clearInterval(timerInterval);
            
            const correctAnswers = question.correct;
            const isCorrect = correctAnswers.includes(index);
    
            if (!isCorrect) {
                if (isKeyUsed && keyUsageCount < 2) {
                    // If key was used and still has chances left
                    handleKeyUsage();
                    return; // Allow another attempt
                } else {
                    // No more key chances or key not used
                    closeModal();
                    callback(false);
                    createKeyUsagePopup("Incorrect answer", "warning");
                }
            } else {
                // Correct answer
                closeModal();
                callback(true);
            }
        };
        optionsContainer.appendChild(button);
    });

    modal.appendChild(optionsContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}




function customConfirm(message) {
    return new Promise((resolve) => {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1100';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s ease';

        // Create popup container
        const popup = document.createElement('div');
        popup.style.backgroundColor = '#f8f9fa';
        popup.style.border = '2px solid #007bff';
        popup.style.borderRadius = '15px';
        popup.style.padding = '30px';
        popup.style.maxWidth = '450px';
        popup.style.width = '90%';
        popup.style.textAlign = 'center';
        popup.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        popup.style.transform = 'scale(0.7)';
        popup.style.opacity = '0';
        popup.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

        // Add icon
        const icon = document.createElement('div');
        icon.style.fontSize = '4rem';
        icon.style.marginBottom = '20px';
        icon.innerHTML = '🚗'; // Car emoji

        // Add message text
        const messageText = document.createElement('h2');
        messageText.innerText = message;
        messageText.style.fontSize = '1.3rem';
        messageText.style.marginBottom = '25px';
        messageText.style.color = '#333';

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.gap = '20px';

        // Yes button
        const yesButton = document.createElement('button');
        yesButton.innerText = 'Yes, Let\'s Go!';
        yesButton.style.backgroundColor = '#28a745';
        yesButton.style.color = 'white';
        yesButton.style.border = 'none';
        yesButton.style.padding = '12px 25px';
        yesButton.style.borderRadius = '8px';
        yesButton.style.fontSize = '1rem';
        yesButton.style.cursor = 'pointer';
        yesButton.style.transition = 'background-color 0.3s ease, transform 0.2s ease';

        // No button
        const noButton = document.createElement('button');
        noButton.innerText = 'Not Now';
        noButton.style.backgroundColor = '#dc3545';
        noButton.style.color = 'white';
        noButton.style.border = 'none';
        noButton.style.padding = '12px 25px';
        noButton.style.borderRadius = '8px';
        noButton.style.fontSize = '1rem';
        noButton.style.cursor = 'pointer';
        noButton.style.transition = 'background-color 0.3s ease, transform 0.2s ease';

        // Hover and click effects
        [yesButton, noButton].forEach(button => {
            button.onmouseover = () => {
                button.style.transform = 'scale(1.05)';
            };
            button.onmouseout = () => {
                button.style.transform = 'scale(1)';
            };
        });

        // Button click handlers
        yesButton.onclick = () => {
            closePopup(true);
        };
        noButton.onclick = () => {
            closePopup(false);
        };

        // Assemble popup
        buttonContainer.appendChild(yesButton);
        buttonContainer.appendChild(noButton);
        
        popup.appendChild(icon);
        popup.appendChild(messageText);
        popup.appendChild(buttonContainer);
        overlay.appendChild(popup);

        // Add to body
        document.body.appendChild(overlay);

        // Trigger animation
        setTimeout(() => {
            overlay.style.opacity = '1';
            popup.style.transform = 'scale(1)';
            popup.style.opacity = '1';
        }, 10);

        // Close functionality
        function closePopup(result) {
            overlay.style.opacity = '0';
            popup.style.transform = 'scale(0.7)';
            popup.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(overlay);
                resolve(result);
            }, 300);
        }

        // Close on outside click
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                closePopup(false);
            }
        };
    });
}




let ladderAttempted = {}; // Object to track ladder attempts by player and position
function handleLadder(player, destination, diceValue, callback) {
    // Check if the ladder has already been attempted
    if (ladderAttempted[player] && ladderAttempted[player][p1sum]) {
        createKeyUsagePopup("Cannot use the Car Again");
        callback(); // Continue game flow
        return;
    }

    // Initialize ladderAttempted for the player if not present
    if (!ladderAttempted[player]) {
        ladderAttempted[player] = {};
    }

    // Prompt the user if they want to climb the ladder
    customConfirm("Car Reached!! Answer the next two Questions, and rush ahead!!").then((climb) => {
        if (climb) {
            // If the user chooses to climb, show the question
            // Make sure to pass the current position and the correct callback
            showQuestion(diceValue, p1sum, (correct) => {
                if (correct) {

                    correct_ans.volume = 0.5;

                    correct_ans.play()

                    // Calculate the movement distance
                    const movementDistance = destination - p1sum;

                    car_move.play()

                    // Trigger the GIF animation
                    const animationDiv = document.getElementById("car-animation");
                    const carGif = document.getElementById("car-gif");

                    // Set the GIF path (static path, always the same GIF)
                    carGif.src = "./images/car_1.gif"; // Replace with the actual path to your GIF

                    // Show the animation
                    animationDiv.style.display = "block";
                    animationDiv.addEventListener("animationend", () => {
                    animationDiv.style.display = "none"; // Hide it after the animation ends
                    // Move the player to the destination
                    play(player, p1sum, 0, movementDistance, () => {

                        createKeyUsagePopup("Correct answer! Car broom broooooooooooooom");

                      
                        });

                        // Call the original callback to continue game flow
                        callback();
                    });
                } else {
                    wrong_ans.volume = 0.5;

                    wrong_ans.play()

                    createKeyUsagePopup("Wrong answer! Cars Door Closed.");
                    // Mark the ladder as attempted
                    ladderAttempted[player][p1sum] = true;
                    
                    // Refresh position visually without moving
                    play(player, p1sum, 0, 0, callback);
                }
            });
        } else {
            // If the user chooses not to climb, terminate the function
            createKeyUsagePopup("You chose not to use the Car.");
            // Mark the ladder as attempted
            ladderAttempted[player][p1sum] = true;
            callback(); // Continue the game flow
        }
    });
}

let policeAttempted = {}; // Object to track ladder attempts by player and position

function handlePolice(player, destination, diceValue, callback) {
    // Check if the police move has already been attempted
    if (policeAttempted[player] && policeAttempted[player][p1sum]) {
        createKeyUsagePopup("Police Can't Again");
        callback(); // Continue game flow
        return;
    }

    // Initialize policeAttempted for the player if not present
    if (!policeAttempted[player]) {
        policeAttempted[player] = {};
    }

    // Show the question
    showQuestion(diceValue, p1sum, (correct) => {
        if (!correct) {
            wrong_ans.volume = 0.5;

            wrong_ans.play()

            jail_bg.play()
            negative_beep.play()
            // Directly set the player's position to the destination
            p1sum = destination;

            // Move the player to the new position
            const playerElement = document.getElementById(player);
            
            // Grid configuration (matching the play function)
            const gridSize = 105;
            const columns = 10;

            const totalSquares = destination - 1;
            const rowIndex = Math.floor(totalSquares / columns);
            const colIndex = totalSquares % columns;

            // Zigzag movement logic
            let left;
            if (rowIndex % 2 === 0) {
                // Even rows (left to right)
                left = colIndex * gridSize;
            } else {
                // Odd rows (right to left)
                left = (columns - 1 - colIndex) * gridSize;
            }

            // Calculate vertical position (inverting Y-axis)
            const top = -(rowIndex * 150);

            // Immediately set the player's position
            playerElement.style.left = `${left}px`;
            playerElement.style.top = `${top}px`;

            createKeyUsagePopup("Wrong answer! Sent back!");

            // Trigger the GIF animation
            const animationDiv = document.getElementById("car-animation");
            const elevatorGif = document.getElementById("car-gif");

            elevatorGif.src = "images\\Stock Images\\Jail.gif";

            animationDiv.style.display = "block";
            animationDiv.addEventListener("animationend", () => {
                animationDiv.style.display = "none";
            });

            // Mark this police square as attempted
            policeAttempted[player][p1sum] = true;

            callback();
        } else {

            correct_ans.volume = 0.5;

            correct_ans.play()
            // If answer is right, move just one step ahead
            play(player, p1sum, 0, 1, () => {
                createKeyUsagePopup("Correct answer! Escaped Police.");
                
                // Mark this police square as attempted
                policeAttempted[player][p1sum] = true;

                callback();
            });
        }
    });
}
// let policeAttempted = {}; // Object to track snake attempts by player and position
// function handlePolice(player, destination, diceValue, callback) {
//     // Check if the snake has already been attempted
//     if (policeAttempted[player] && policeAttempted[player][p1sum]) {
//         createKeyUsagePopup("Cannot use the Police Route Again");
//         callback(); // Continue game flow
//         return;
//     }

//     // Initialize policeAttempted for the player if not present
//     if (!policeAttempted[player]) {
//         policeAttempted[player] = {};
//     }

//     // Prompt the user if they want to use the police route
//     customConfirm("Police Checkpoint Reached!! Answer the next Question!!").then((attempt) => {
//         if (attempt) {
//             // If the user chooses to attempt, show the question
//             showQuestion(diceValue, p1sum, (correct) => {
//                 if (correct) {
//                     // If correct, move only ONE step ahead
//                     play(player, p1sum, 0, 1, () => {
//                         createKeyUsagePopup("Correct answer! Move one step ahead.");
//                         callback();
//                     });
//                 } else {
//                     // If incorrect, move directly to the destination
//                     const movementDistance = destination - p1sum;
                    
//                     play(player, p1sum, 0, movementDistance, () => {
//                         createKeyUsagePopup("Wrong answer! Directly moved to destination.");
                        
//                         // Mark the snake as attempted
//                         policeAttempted[player][p1sum] = true;
                        
//                         callback();
//                     });
//                 }
//             });
//         } else {
//             // If the user chooses not to attempt, terminate the function
//             createKeyUsagePopup("You chose not to use the Police Route.");
//             // Mark the snake as attempted
//             policeAttempted[player][p1sum] = true;
//             callback(); // Continue the game flow
//         }
//     });
// }



document.addEventListener('DOMContentLoaded', function() {
    // Get references to key elements
    const bookStatusBox = document.getElementById('BookStatusBox');
    const pdfViewerContainer = document.getElementById('pdfViewerContainer');
    const pdfFrame = document.getElementById('pdfFrame');
    const closeButton = document.getElementById('closeButton');

    // Event listener for opening PDF
    bookStatusBox.addEventListener('click', function() {
        // Set the PDF source (replace with your PDF path)
        pdfFrame.src = 'public\\Articles.pdf'; // Use a web-accessible path
        
        // Show the PDF viewer
        pdfViewerContainer.style.display = 'flex';
    });

    // Event listener for closing PDF viewer
    closeButton.addEventListener('click', function() {
        // Hide the PDF viewer
        pdfViewerContainer.style.display = 'none';
        
        // Clear the iframe source to stop any ongoing PDF rendering
        pdfFrame.src = '';
    });
});





// Function to update the Key Status
function updateKeyStatus(isFound) {
    const keyStatusBox = document.getElementById("keyStatusBox");
    if (isFound) {
        keyStatusBox.textContent = "Key Found";
        keyStatusBox.classList.add("active");
        keyStatusBox.disabled = false; // Enable interaction
        isKeyActive = true; // Activate key globally
    } else {
        keyStatusBox.textContent = "Key Not Found";
        keyStatusBox.classList.remove("active");
        keyStatusBox.disabled = true; // Disable interaction
        isKeyActive = false; // Deactivate key globally
    }
}



// Event Listener for Key Status Button
document.getElementById("keyStatusBox").addEventListener("click", function() {
    if (isKeyFound()) {
        useKey();
    }
});

// Helper Function to Check if Key is Found
function isKeyFound() {
    const keyStatusBox = document.getElementById("keyStatusBox");
    return keyStatusBox.textContent === "Key Found";
}

// Function to Handle Key Usage
function useKey() {
    if (isKeyFound()) {
        createKeyUsagePopup("Key has been used!");
        updateKeyStatus(false); // Reset key status
    } else {
        createKeyUsagePopup("Key is not available.");
    }
}



// let handledbooks = {}; // Object to track ladder attempts by player and position

function handleBook(number) {
    // Create a mapping of numbers to image URLs
    const imageMapping = {
      4: "images\\book_1.png", // Replace with your image URL or path
      29: "images\\book_2.png", // Replace with your image URL or path
      43: "images\\book_3.png", // Replace with your image URL or path
    };


    // if (handledbooks[player] && handledbooks[player][p1sum]) {
    // createKeyUsagePopup("Cannot use the Car Again");
    // callback(); // Continue game flow
    // return;
    // }

    //  // Initialize ladderAttempted for the player if not present
    //  if (!handledbooks[player]) {
    //     handledbooks[player] = {};
    // }

    

   // Check if the number corresponds to an image
  if (imageMapping[number]) {
    // Show the congratulatory message
    const congratsPopup = document.createElement("div");
    congratsPopup.style.position = "fixed";
    congratsPopup.style.top = "0";
    congratsPopup.style.left = "0";
    congratsPopup.style.width = "100%";
    congratsPopup.style.height = "100%";
    congratsPopup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    congratsPopup.style.display = "flex";
    congratsPopup.style.alignItems = "center";
    congratsPopup.style.justifyContent = "center";
    congratsPopup.style.zIndex = "1000";
    congratsPopup.style.color = "white";
    congratsPopup.style.fontSize = "24px";
    congratsPopup.style.textAlign = "center";

    congratsPopup.textContent =
      "Congrats! Look at the image and learn everything necessary properly.";
    document.body.appendChild(congratsPopup);

    // After 3 seconds, replace the congratulatory message with the image and timer
    setTimeout(() => {
      document.body.removeChild(congratsPopup);

      // Create a container for the image popup
      const imagePopup = document.createElement("div");
      imagePopup.style.position = "fixed";
      imagePopup.style.top = "0";
      imagePopup.style.left = "0";
      imagePopup.style.width = "100%";
      imagePopup.style.height = "100%";
      imagePopup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      imagePopup.style.display = "flex";
      imagePopup.style.alignItems = "center";
      imagePopup.style.justifyContent = "center";
      imagePopup.style.zIndex = "1000";

      // Add the image to the popup
      const img = document.createElement("img");
      img.src = imageMapping[number];
      img.style.maxWidth = "90%";
      img.style.maxHeight = "90%";
      imagePopup.appendChild(img);

      // Add the timer below the image
      const timer = document.createElement("div");
      timer.style.position = "absolute";
      timer.style.bottom = "20px";
      timer.style.color = "white";
      timer.style.fontSize = "20px";
      timer.style.textAlign = "center";
      timer.textContent = "15 seconds remaining...";
      imagePopup.appendChild(timer);

      document.body.appendChild(imagePopup);

      // Update the timer every second
      let secondsLeft = 15;
      const countdown = setInterval(() => {
        secondsLeft -= 1;
        timer.textContent = `${secondsLeft} seconds remaining...`;
        if (secondsLeft <= 0) {
          clearInterval(countdown);
        }
      }, 1000);

      // Close the popup after 20 seconds
      setTimeout(() => {
        document.body.removeChild(imagePopup);
      }, 10000); // 20 seconds
    }, 3000); // 5 seconds for the congratulatory message
  } else {
    console.error("No image found for this number");
  }
}

  


// Function to create fireworks display
function createFireworksDisplay() {
    // Create a container for fireworks
    const fireworksContainer = document.createElement('div');
    fireworksContainer.id = 'fireworks-container';
    fireworksContainer.style.position = 'fixed';
    fireworksContainer.style.top = '0';
    fireworksContainer.style.left = '0';
    fireworksContainer.style.width = '100%';
    fireworksContainer.style.height = '100%';
    fireworksContainer.style.pointerEvents = 'none';
    fireworksContainer.style.zIndex = '9999';
    document.body.appendChild(fireworksContainer);

    // Create multiple fireworks
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.width = '10px';
            firework.style.height = '10px';
            firework.style.borderRadius = '50%';
            firework.style.backgroundColor = getRandomColor();
            
            // Random starting position
            firework.style.left = `${Math.random() * window.innerWidth}px`;
            firework.style.top = `${Math.random() * window.innerHeight}px`;
            
            // Animate firework expansion
            firework.animate([
                { transform: 'scale(1)', opacity: 1 },
                { transform: 'scale(20)', opacity: 0 }
            ], {
                duration: 10000,
                easing: 'ease-out'
            });

            fireworksContainer.appendChild(firework);

            // Remove firework after animation
            setTimeout(() => {
                firework.remove();
            }, 10000);
        }, i * 200);
    }

    // Remove fireworks container after all animations
    setTimeout(() => {
        fireworksContainer.remove();
    }, 5500);
}

// Function to create win popup
function createWinPopup() {
    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.id = 'win-popup';
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popupContainer.style.color = 'white';
    popupContainer.style.padding = '20px';
    popupContainer.style.borderRadius = '10px';
    popupContainer.style.textAlign = 'center';
    popupContainer.style.zIndex = '10000';

    // Win message
    winSound.play()
    const winMessage = document.createElement('h1');
    winMessage.textContent = 'Congratulations! You Won!';

    popupContainer.appendChild(winMessage);

    // Play again button
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.style.marginTop = '20px';
    playAgainButton.style.padding = '10px 20px';
    playAgainButton.style.fontSize = '16px';
    playAgainButton.onclick = () => {
        location.reload();
    };
    popupContainer.appendChild(playAgainButton);

    // Add popup to body
    document.body.appendChild(popupContainer);
}

// Utility function to get random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function play(player, psum, correction, num, callback) {
    // Function to move player to a specific position
    function movePlayerToSquare(targetSquare) {
        // Grid configuration
        const gridSize = 105; // Width of each grid box
        const columns = 10; // Number of columns

        const playerElement = document.getElementById(player);
        playerElement.style.transition = 'all 0.3s ease-in-out';

        // Calculate the path of squares
        const currentSquare = p1sum - num;
        const squares = [];

        // Generate squares between current and target position
        for (let i = currentSquare + 1; i <= targetSquare; i++) {
            const totalSquares = i - 1;
            const rowIndex = Math.floor(totalSquares / columns);
            const colIndex = totalSquares % columns;

            // Zigzag movement logic
            let left;
            if (rowIndex % 2 === 0) {
                // Even rows (left to right)
                left = colIndex * gridSize;
            } else {
                // Odd rows (right to left)
                left = (columns - 1 - colIndex) * gridSize;
            }

            // Calculate vertical position (inverting Y-axis)
            const top = -(rowIndex * 150);

            squares.push({ left, top, square: i });
        }

        // Animate movement square by square
        function animateNextSquare() {
            if (squares.length === 0) {
                // All squares traversed, continue game logic
                setTimeout(() => {
                    handleSpecialSquares(targetSquare, callback);
                }, 300);
                return;
            }
        
            const nextSquare = squares.shift();
            playerElement.style.left = `${nextSquare.left}px`;
            playerElement.style.top = `${nextSquare.top}px`;
        
            // Reset and play move sound effect
            move_bg.currentTime = 0;
            move_bg.play();
        
            // Check for special squares during movement
            handleIntermediateSquares(nextSquare.square);
            
            // Schedule next square movement
            setTimeout(animateNextSquare, 300);
        }
        // Start the animation
        animateNextSquare();
    }

    // Function to handle special squares during movement
    function handleIntermediateSquares(square) {
        switch (square) {
            case 17:
                lawyer.volume = 0.5; // Set the volume to 20%

                lawyer.play();

                // Prevent automatic handling of 17 during ladder movement
                // if (p1sum !== 14) {
                handleLawyerAchieved();
                // }
                break;
            case 31:
                winSound.volume = 0.5; // Set the volume to 20%
                winSound.play();

                handleKeyAchieved();
                break;
        }
    }

    // Function to handle special squares at final destination
    function handleSpecialSquares(square, callback) {
        switch (square) {
            // Books
            case 4:
                handleBook(4);
                break;
            case 29:
                handleBook(29);
                break;
            case 43:
                handleBook(43);
                break;
            // Ladders
            case 8:
                car_placed.volume = 0.5; // Set the volume to 20%
                car_placed.play();

                handleLadder(player, 14, 0, callback);
                break;
            case 22:
                car_placed.volume = 0.5; // Set the volume to 20%

                car_placed.play();

                handleLadder(player, 26, 0, callback);
                break;



            const animatedImagePath = "C:\\Users\\Manas\\Desktop\\Samvidhan Mandal\\images\\Stock Images\\Indian_Police.png"; // Ensure this path is correct relative to your HTML file

            // Police
            case 11:

                police_bg.volume = 0.5; // Set the volume to 20%

                police_bg.play();

                handlePolice(player, 6, 0, callback);
                break;
            
            case 25:
                police_bg.volume = 0.5; // Set the volume to 20%

                police_bg.play();

                
                handlePolice(player, 13, 0, callback);
                break;


            case 33:
                police_bg.volume = 0.5; // Set the volume to 20%

                police_bg.play();

                handlePolice(player, 13, 0, callback);
                break;


            case 39:
                police_bg.volume = 0.5; // Set the volume to 20%

                police_bg.play();


                handlePolice(player, 6, 0, callback);
                break;


            case 41:
                police_bg.volume = 0.5; // Set the volume to 20%

                police_bg.play();


                handlePolice(player, 36, 0, callback);
                break;

            case 47:
                police_bg.volume = 0.5; // Set the volume to 20%

                police_bg.play();


                handlePolice(player, 2, 0, callback);
                break;

            // Winning condition
            case 50:
                createFireworksDisplay();
                createWinPopup();
                break;
            // Continue the game
            default:
                callback();
                break;
        }
    }

    // Update player sum
    p1sum += num;
    if (p1sum > 50) {
        p1sum -= num;
        return;
    }

    // Trigger step-by-step movement
    movePlayerToSquare(p1sum);
}



function showAnswerFeedback(isCorrect) {
    // Create the main container
    const containerEl = document.createElement('div');
    containerEl.style.position = 'fixed';
    containerEl.style.top = '50%';
    containerEl.style.left = '50%';
    containerEl.style.transform = 'translate(-50%, -50%) scale(0.5)';
    containerEl.style.zIndex = '1000';
    containerEl.style.width = '300px';
    containerEl.style.height = '200px';
    containerEl.style.backgroundColor = '#F4ECD8'; // Parchment-like color
    containerEl.style.borderRadius = '10px';
    containerEl.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)';
    containerEl.style.display = 'flex';
    containerEl.style.alignItems = 'center';
    containerEl.style.justifyContent = 'center';
    containerEl.style.overflow = 'hidden';
    
    // Removed the background size and grid-creating properties
    containerEl.style.background = `
        repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.03) 0px,
            rgba(0,0,0,0.03) 1px,
            transparent 1px,
            transparent 20px
        ),
        repeating-linear-gradient(
            90deg,
            rgba(0,0,0,0.03) 0px,
            rgba(0,0,0,0.03) 1px,
            transparent 1px,
            transparent 20px
        ),
        #F4ECD8
    `;
    
    // Create the icon element
    const iconEl = document.createElement('div');
    iconEl.style.fontSize = '120px';
    iconEl.style.fontWeight = 'bold';
    
    // Set the symbol and color based on correctness
    if (isCorrect) {
        iconEl.textContent = '✓'; // Checkmark
        iconEl.style.color = 'green';
    } else {
        iconEl.textContent = '✘'; // Cross mark
        iconEl.style.color = 'red';
    }
    
    // Add icon to container
    containerEl.appendChild(iconEl);
    
    // Add to the body
    document.body.appendChild(containerEl);
    
    // Animate entrance
    requestAnimationFrame(() => {
        containerEl.style.transition = 'all 0.3s ease';
        containerEl.style.transform = 'translate(-50%, -50%) scale(1)';
        containerEl.style.opacity = '1';
    });
    
    // Remove after animation
    setTimeout(() => {
        containerEl.style.transform = 'translate(-50%, -50%) scale(1.1)';
        containerEl.style.opacity = '0';
        
        // Remove from DOM after fade out
        setTimeout(() => {
            document.body.removeChild(containerEl);
        }, 300);
    }, 1000);
}

// Function to handle the Lawyer Achieved popup
function handleKeyAchieved() {
    // Define the image path (Use relative paths for web)
    const animatedImagePath = "images/key.png"; // Ensure this path is correct relative to your HTML file

    // Show the popup with the image and message
    showKeyPop(animatedImagePath);

    // Update the Lawyer Status
    isKeyActive = true;
    updateKeyStatus(true);
    
}



// Function to handle the Lawyer Achieved popup
function handleLawyerAchieved() {
    // Define the image path (Use relative paths for web)
    const animatedImagePath = "images/lawyer photo.png"; // Ensure this path is correct relative to your HTML file

    // Show the popup with the image and message
    showLawyerPopup(animatedImagePath);

    // Update the Lawyer Status
    isLawyerActive = true;
    updateLawyerStatus(true);
    
}

// Function to display the Lawyer Popup
function showLawyerPopup(imagePath) {
    const popup = document.getElementById("lawyerPopup");
    const lawyerImage = document.getElementById("lawyerImage");
    const closeBtn = document.getElementById("closePopup");

    // Set the image source
    lawyerImage.src = imagePath;

    // Display the popup
    popup.style.display = "flex";

    // Disable game interactions if necessary
    // For example, disable dice rolling until popup is closed

    // Close button event
    closeBtn.onclick = () => {
        popup.style.display = "none";
        // Re-enable game interactions if they were disabled
    };

    // Optional: Close the popup when clicking outside the content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            // Re-enable game interactions if they were disabled
        }
    };
}




// Function to display the Lawyer Popup
function showKeyPop(imagePath) {
    const popup = document.getElementById("KeyPopup");
    const lawyerImage = document.getElementById("KeyImage");
    const closeBtn = document.getElementById("closePopupkey");

    // Set the image source
    lawyerImage.src = imagePath;

    // Display the popup
    popup.style.display = "flex";

    // Disable game interactions if necessary
    // For example, disable dice rolling until popup is closed

    // Close button event
    closeBtn.onclick = () => {
        popup.style.display = "none";
        // Re-enable game interactions if they were disabled
    };

    // Optional: Close the popup when clicking outside the content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            // Re-enable game interactions if they were disabled
        }
    };
}


// Function to handle the Lawyer Achieved popup and status update
// function handleLawyerAchieved() {
//     // Define the image path (Use relative paths for web)
//     const animatedImagePath = "C:\\Users\\Manas\\Desktop\\Samvidhan Mandal\\images\\lawyer photo.png"; // Ensure this path is correct relative to your HTML file

//    // Show the popup with the image and message
//    showLawyerPopup(animatedImagePath);

//    // Update the Lawyer Status Box
//    updateLawyerStatus(true);
// }

// Function to update the Lawyer Status
function updateLawyerStatus(isActive) {
   const statusBox = document.getElementById("lawyerStatusBox");

   if (isActive) {
       statusBox.textContent = "Lawyer Available";
       statusBox.style.backgroundColor = "#28a745"; // Green color
   } else {
       statusBox.textContent = "Lawyer Not Active";
       statusBox.style.backgroundColor = "#ff4d4d"; // Red color
   }
}


// const allowedNumbers = [4, 8, 11, 17, 22, 25, 29, 31, 33, 39, 41, 43, 47, 50]; // Replace with your desired list of numbers
const allowedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]; // Replace with your desired list of numbers

// Dice roll button functionality
document.getElementById("diceBtn").addEventListener("click", function () {
    if (questionActive) {
        createKeyUsagePopup("Please answer the current question before rolling again.");
        return;
    }

    rollingSound.volume = 0.5;
    rollingSound.play();

    let num = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = num;

    let diceElement = document.getElementById("dice");
    diceElement.classList.remove('one', 'two', 'three', 'four', 'five', 'six');
    diceElement.classList.add(num.toString());

    // Calculate remaining squares to reach 50
    const remainingSquares = 50 - p1sum;

    // Determine allowed numbers to reach 50 exactly
    const getPossibleNumbers = () => {
        let possibleNumbers = [];
        
        // Check all numbers from 1 to 6 that can help reach 50
        for (let i = 1; i <= 6; i++) {
            if (p1sum + i === 50) {
                possibleNumbers.push(i);
            }
        }
        
        // If no exact 50 is possible, return all numbers that don't overshoot
        if (possibleNumbers.length === 0) {
            possibleNumbers = [1, 2, 3, 4, 5, 6].filter(i => p1sum + i <= 50);
        }
        
        return possibleNumbers;
    };

    const allowedNumbers = getPossibleNumbers();

    // Check if the player can reach 50 exactly
    if (num <= remainingSquares) {
        // If the number has a question or is in allowed numbers
        if (allowedNumbers.includes(num)) {
            showQuestion(num, p1sum + num, (correct) => {
                showAnswerFeedback(correct);
                if (correct) {

                    correct_ans.volume = 0.5;

                    correct_ans.play()
                    play('p1', 'p1sum', 0, num);
                } else {
                    wrong_ans.volume = 0.5;

                    wrong_ans.play()
                    play('p1', 'p1sum', 0, 0);
                }
            });
        } else {
            // If no question for this number, but allowed numbers exist
            let allowedNumbersStr = allowedNumbers.join(", ");
            createKeyUsagePopup(`You must roll: ${allowedNumbersStr} to reach 50 exactly.`);
        }
    } else {
        // Player rolled a number larger than remaining squares
        if (allowedNumbers.includes(num)) {
            showQuestion(num, p1sum + num, (correct) => {
                showAnswerFeedback(correct);
                if (correct) {
                    correct_ans.volume = 0.5;

                    correct_ans.play()
                    // Stay in place if the number is too big
                    play('p1', 'p1sum', 0, 0);
                } else {
                    wrong_ans.volume = 0.5;

                    wrong_ans.play()

                    play('p1', 'p1sum', 0, 0);
                }
            });
        } else {
            let allowedNumbersStr = allowedNumbers.join(", ");
            createKeyUsagePopup(`Must roll: ${allowedNumbersStr} to reach 50 exactly. Roll Again, get ready for the final question!.`);
            // showQuestion(num, p1sum + num, (correct))
        }
    }
});