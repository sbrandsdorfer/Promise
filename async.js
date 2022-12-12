async function doAssignmentAsync(){
    doWork();
    toggleEl('feedback-form', true);

    let response;
    try{
        response = await doPromise(() => {
            return pageState.feedbackValue;
        });
    }catch(err){
        response = 'failure';
    }
    
    toggleEl('feedback-form', false);
    if(response == 'success') doSuccess();
    else if(response == 'failure') doFailure();
    init();
}

function doAssignmentAsyncCaller(){
    doAssignmentAsync();
    console.log("Called the function");
}