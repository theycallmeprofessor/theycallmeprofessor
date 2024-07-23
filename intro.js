

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Mirza
   * @author : Mirza <https://github.com/theycallmeprofessormirza>
   * @youtube : https://www.youtube.com/c/deadlock
   * @infoription : Mirza ,A Multi-functional whatsapp user bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By MirZa-ON-fire
   * © 2023 MirZa ✭ ⛥.
   * plugin date : 10/6/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/



const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/SuhailTechInfo/Suhail-Md' // Source URL
const number = '923184474176'
var name = ' Mirza'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/1e60489705c851f74b55e.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
│ Name      : Mitza
│ Place       : ʟαнᴏʀᴇ ᴘᴋ
│ Gender    :  ᴍᴀʟᴇ
│ Age          : 22_
│ Phone     : wa.me/923168066637
│ Youtube   : BH4G BSDK
│ Status     : ɢᴀᴍᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ
╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`



 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"mirza",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
