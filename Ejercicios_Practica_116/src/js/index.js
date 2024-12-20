// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  let plainArray = [...this.plain];
  let cipherArray = [...this.cipher];
  let result = [];

  [...secret].forEach((element) => {
    result.push((plainArray[cipherArray.indexOf(element)] != undefined
      ? plainArray[cipherArray.indexOf(element)]
      : ' '));
  });

  return result.join('');

}

console.log(decrypt(secret));