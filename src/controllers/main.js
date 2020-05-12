const TiktokAPI = require('tiktok-api').default;
const getRequestParams = require('tiktok-api').getRequestParams;

const signURL = async (url, ts, deviceId) => {
  const as = '23d22211fe06dcd8a2927b2fbc6cd74d';
  const cp = '164967f5772b6f50e2424c062c804a23'
  const mas = 'd0cbc0a4b4b89fe0525c449c785cc736';
  return `${url}&as=${as}&cp=${cp}&mas=${mas}`;
};

const params = getRequestParams({
	device_id: '6594726280552547846',
	fp: 9,
	iid: '6620659482206930694',
	openudid: 'b307b864b574e818',
});

const api = new TiktokAPI(params, { signURL });

const getHome = async (req, res, next) => {
  try {
    const results = await api.getUser("6739232776803402758");
    console.log({results})
    return res.status(200).json({msg: "Home Run!"});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUser  = async (req, res, next) => {
  const results = await api.searchUsers({
    keyword: 'amir',
    count: 10,
    cursor: 0,
  })
  console.log({results})
  // .then(resp => {
  //   console.log(resp)
  //   res.send(JSON.stringify(resp));
  // })
  // .catch(console.log);
}

module.exports = {getHome, getUser};