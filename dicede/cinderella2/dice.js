var n_flag = 1;

var pex = false;
var api = false;

function main() {
  var document = window.document;
  var can = document.getElementById('canvas');

  var img1 = document.createElement("img"),
    img2 = document.createElement("img"),
    img3 = document.createElement("img"),
    img4 = document.createElement("img"),
    img5 = document.createElement("img");

  var chs = new Array();
  chs = Char_set();
  
  var char_num = new Array();
  char_num = Char_rand(chs.length);
  console.log(chs.length);
  console.log(char_num);
  img1.src = chs[char_num[0]].img.toString();
  img2.src = chs[char_num[1]].img.toString();
  img3.src = chs[char_num[2]].img.toString();
  img4.src = chs[char_num[3]].img.toString();
  img5.src = chs[char_num[4]].img.toString();

  var queue = null;
  window.scrollTo(0, 1);
  var width = window.innerWidth;
  var heigh = window.innerHeight;
  console.log(width);
  console.log(heigh);
  //    var wid_sc = width/240;
  //    var hei_sc = heigh/320;
  var disp_width = 360;

  //    if(wid_sc>hei_sc){
  //    	disp_width = 240*hei_sc;
  //    }else{
  //    	disp_width = 240*wid_sc;
  //    }

  var option = {
    debug: true,
    suppressLog: {
      "fps": true
    },
    'enableTouch': true,
    'enableButton': true,
    'fixRatio': true,
    "width": disp_width,
    frameCallback: {
      "/": {
        "1": function () {
          console.log(api.getMovieClipNames(""));
        },
        "2": function () {
          console.log("entered frame:2");
          for (var i = 0; i < 5; i++) {
            api.setVariable("/", "nm_" + (i + 1).toString(), chs[char_num[i]].name);
            api.setVariable("/", "hp_" + (i + 1).toString(), chs[char_num[i]].hp);
            api.setVariable("/", "tx_" + (i + 1).toString() + "1", chs[char_num[i]].tx1);
            api.setVariable("/", "tx_" + (i + 1).toString() + "2", chs[char_num[i]].tx2);
            api.setVariable("/", "sk_" + (i + 1).toString() + "1", chs[char_num[i]].sk1);
            api.setVariable("/", "sk_" + (i + 1).toString() + "2", chs[char_num[i]].sk2);
            api.setVariable("/", "sk_" + (i + 1).toString() + "3", chs[char_num[i]].sk3);
            api.setVariable("/", "abl_category" + (i + 1).toString(), chs[char_num[i]].abl_ctg);
            api.setVariable("/", "abl_category_extra" + (i + 1).toString(), chs[char_num[i]].abl_ctg_ex);
            api.setVariable("/", "abl_effect" + (i + 1).toString(), chs[char_num[i]].abl_eff);
            api.setVariable("/", "abl_effect_extra" + (i + 1).toString(), chs[char_num[i]].abl_eff_ex);
            api.setVariable("/", "abl_limit" + (i + 1).toString(), chs[char_num[i]].abl_lim);
            api.setVariable("/", "abl_name" + (i + 1).toString(), chs[char_num[i]].abl_nm);
            api.setVariable("/", "abl_turn" + (i + 1).toString(), chs[char_num[i]].abl_turn);
            api.setVariable("/", "abl_turn_extra" + (i + 1).toString(), chs[char_num[i]].abl_turn_ex);
            api.setVariable("/", "abl_wait" + (i + 1).toString(), chs[char_num[i]].abl_wait);
            api.setVariable("/", "dmr_category" + (i + 1).toString(), chs[char_num[i]].dmr_ctg);
            api.setVariable("/", "dmr_effect" + (i + 1).toString(), chs[char_num[i]].dmr_eff);
            api.setVariable("/", "dmr_turn" + (i + 1).toString(), chs[char_num[i]].dmr_turn);
            api.setVariable("/", "id_" + (i + 1).toString(), chs[char_num[i]].id);
            api.setVariable("/", "opg_" + (i + 1).toString(), chs[char_num[i]].opg);
            api.setVariable("/", "opl_" + (i + 1).toString(), chs[char_num[i]].opl);
            api.setVariable("/", "vo_" + (i + 1).toString() + "1", chs[char_num[i]].vo1);
          }
          api.setVariable("/", "url", "index.html");
          api.setVariable("/", "area_released_flag", n_flag);
          api.setVariable("/", "e_open_flag0", "1");
          api.setVariable("/", "e_open_flag19", "1");
          api.setVariable("/", "e_open_flag20", "1");
          api.setVariable("/", "e_open_flag21", "1");
          api.setVariable("/", "e_open_flag22", "1");
          api.setVariable("/", "e_open_flag26", "1");
          api.setVariable("/", "e_open_flag27", "1");
          api.setVariable("/", "e_open_flag31", "1");
          api.setVariable("/", "e_open_flag32", "1");
          api.setVariable("/", "e_open_flag33", "1");

          api.replaceMovieClip("mapc", img1, 120, 120, true, 0.5, 1.0);
          api.replaceMovieClip("char1", img1, 120, 120, true);
          api.replaceMovieClip("char2", img2, 120, 120, true);
          api.replaceMovieClip("char3", img3, 120, 120, true);
          api.replaceMovieClip("char4", img4, 120, 120, true);
          api.replaceMovieClip("char5", img5, 120, 120, true);
          api.replaceMovieClip("endch1", img1, 120, 120, true, 0.5, 1.05);
          api.replaceMovieClip("endch2", img2, 120, 120, true, 1.3, 1.05);
          api.replaceMovieClip("endch3", img3, 120, 120, true, -0.32, 1.05);
          api.replaceMovieClip("endch4", img4, 120, 120, true, 2, 1.05);
          api.replaceMovieClip("endch5", img5, 120, 120, true, -1.1, 1.05);
        },
        "last": function () {
          console.log("entered mc_name:last frame");
        }
      }
    }
  };
  pex = new Pex("./dice.swf", "container", option);
  api = pex.getAPI();

}

function connectData(a, b) {
  api.callActions("/", "connectSuccess");
  return;
}