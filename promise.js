
function doPromise(fn){
    return new Promise((resolve, reject) => {
        setInterval(() => {
            let val = fn();
            if(!val) return;
            if(val == 'success') return resolve('success');
            else return reject('failure');
        }, 500);
    });
}

function toggleEl(id,  show){
    document.getElementById(id).style.display = show ? 'flex' : 'none'; 
}

function setBackground(color){
    document.body.style.backgroundColor = color;
}