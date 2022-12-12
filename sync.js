function doAssignmentSync(){
    doWork();
    let done = confirm('Were you successful?');
    if(done) doSuccess();
    else doFailure();
    init();
}