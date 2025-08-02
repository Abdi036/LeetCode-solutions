/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let data = await new Promise(res => setTimeout(res,millis));
    return data
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */