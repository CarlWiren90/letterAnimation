/* This snippet is for an intro animation. Thereof the useEffect hook.  */

const [runAnimation, setRunAnimation] = useState(true);  

    useEffect(() => {
        const letterNodes = Array.from(document.querySelectorAll('.letter'));
        
        if (runAnimation) {
            let chosenLetter = letterNodes[Math.floor((Math.random() * letterNodes.length))];        
            
            if (chosenLetter) {
                if (chosenLetter.classList.contains('letter-reverse')) {
                    chosenLetter.classList.remove('letter-reverse')
                    chosenLetter.classList.add('letter-animation');
                    setRunAnimation(false);
                }
                else if (chosenLetter.classList.contains('letter-animation')) {
                    chosenLetter.classList.remove('letter-animation');
                    chosenLetter.classList.add('letter-reverse')
                    setRunAnimation(false);
                }  
                else {
                    chosenLetter.classList.add('letter-animation');
                    setRunAnimation(false);
                }          
            }
            else 
            {
                console.log('Chosen letter not found in DOM');
            }

            setTimeout(() => {
                setRunAnimation(true);

            }, 3500);
        }
    }, [runAnimation])
