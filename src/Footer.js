import React from 'react';
import "./Footer.css";

const Footer = () => {
    return ( 
            <div className="insideFooter">
                <div className="footerElement">
                    <h3 className="footerHeading">EDYODA</h3>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Tearms of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footerElement">
                    <h3 className="footerHeading">RESOURCES</h3>
                    <a href="#">Cources</a>
                    <a href="#">Learning Videos</a>
                    <a href="#">Educators</a>
                    <a href="#">Edyoda Stories</a>
                    <a href="#">University</a>
                </div>
                <div className="footerElement">
                    <h3 className="footerHeading">FOR ENTERPRISES</h3>
                    <a href="#">Train Your Employees</a>
                    <h3 className="footerHeading">QUICK LINKS</h3>
                    <a href="#">Learn And Earn</a>
                    <a href="#">Become a Learning-Enabler</a>
                    <a href="#">Request New Topic</a>
                </div>
                <div className="footerElement">
                    <h3 className="footerHeading">CONNECT</h3>
                    <div className="address">
                        <a href="#">2nd Floor #188, Survey No. - 123/1, <br/>Incubes Building Next to McDonalds,<br/>ITPL Main Rd, Brookefield,<br/>Bengaluru, Karnataka-560037,<br/>India</a>
                        <a href="#" className="mailImg">
                            <img src="https://www.edyoda.com/static/media/email-white.e7d51381.svg"></img>
                            hello@edyoda.com
                        </a>
                        <div className="contactInfo">
                            <a href="#" className="socialImg">
                                <img className="socialImg1" src="https://www.edyoda.com/static/media/location-pin.de95721a.svg"/>
                            </a>
                            <a href="#" className="socialImg">
                                <img className="socialImg1" src="https://www.edyoda.com/static/media/twitter-white-icon.ea27ab22.svg"/>
                            </a>
                            <a href="#" className="socialImg">
                                <img className="socialImg1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAqCAYAAAC+5wuXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMlJREFUeNpi/P//PwMewAzEPkDsBcRWQKwIxNxYVYIMwoG1gPjCfyIBCw6XqAPxQSAWYSASMGERYwTiBaQYgssgWyC2YCARYDMolIEMgM0gc3IMwhbYSgT0XATiTiB+AsTf4AGLJR39AmJWPAZpAvENjBjCYtB/Ai4CJdJ/xIQRIfCP2MBmoFas4QPf8MWaCwkG/celHhTY/6ngs/fUCqMX1DLoGbUMej6MvcYCLRGJzWsfgVhgUGWRUYNGDRo1aNSgUYNIBgABBgDTamTg3XAChAAAAABJRU5ErkJggg=="/>
                            </a>
                            <a href="#" className="socialImg">
                                <img className="socialImg1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACE1BMVEUAAAD//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f0AAACS7nrlAAAAr3RSTlMAARIiEydtsub757RvKUO+wEIauRXp4zb68i0q7+AWAs+oX/4z4bM3+Q2FVb+R2LDxzvXV3b3EpJJxRyMH8NN7VgrJTP3zd4JaTtoUifTiamucBiU7UVsyGwwdL0BKIQtUjsj435dQJGAOaXkxEJ2D97w8sURn/GK7gZumBLp6Qbjlt262tQPGOJ6KhqDRD+oZra+WkK6HzKwomaua9o2qgJ+pOcPkp9KlfaNwoqER3P6g3gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwQRLRRI/vG6AAADvElEQVR42u3a+TsUYQAH8HfLteQuqWRJISo3hRK2U22HDhRJCB1CETolXZJSoUv3Xe+/WPJsz66d9zvzjnnfeR6735/fd76fPWfmnZcQX1xjWbDQz2JWuX9AYJCVUmoNDlkUKr8+LJy6JiJSbn2Ue/10ohfLfPlLqGdilkrrj4ylSlm2XFL/ijiqnJXxUvptCZSVRCmAVcx+mrRaQr9lDRtAkyUAUkA/TV0rHpCGADRdPGAdBKwXD9gAARniAZkQkCUekA0BOeIBuRCQJx6QDwEF4gEbIWCTeEAhBBSJBxRvBv1bxPcTUgIAW2UASoOY/WVyrpDL7Yz+bbIuibYr99vLJfUTsiNJoT97p7R+QnZ5/hR2y3r/Z1KxZ69bvWNfsdT+v4nfn+w8LzkOpB+UXf8vxZWHDh8pPFplSrkvvvjii5BU1xw7XptSd8KM7qj6kw2n/p9YG8uampn3uadb2Jl1Sihkj3RbVWtty/I8vcdGnDmrCGgB14Tn3IeCG1mXm8i688y7rYbIuQHCNQBK2y+AA9KOlLkA8tQBnQ6qki5/kYBm+PJnknlRN6BDDXCpW72fUmuPXsBlFUCvlvrppFlEAGx9Wvsp7b+iC3AVAq5p76e0XRcgGgE6NX3+ztiv6wHcAAC/GJ5+Sm9WGAvoCuHrpzRQB2CAPTKOcucWP2CQvwUks5UbcNtQgHMByjxA4xAvgPuLppJ6XkCywYA7ZgPoXU5AoNGAe5yALm2HdQze7wl4MPxQfWQuJyBDQ3tC7YhzeGjvI7XRo0YDgntsrhPiH6uMr+cDPFHrH6smsxKAJzzlAzxT6e8jnnkOZ4zzAVTe0IkhBYAFfnO7qw0ERCiv7FVa0aQwLsAEfDGTRDkv0Kw2LsBLdKhXjH5ShGaVGAZ4HcUCEPSP9IYLMAWGjjH7yVsw7R0X4D0YCp4yfwDTurgAiWDoKBtQBaZ9NArwid1PhuzseTlcgM/skV8AgLCfStFgLkA/e2Q+Aoyz56UaBRhAAPRvzAX4yh4JNxo0GQUo0An4ZhTgu07Aj3kD+Gk24JfZgGEfwGyA6d8B038Fpv8PmA7Qey4wDKD3bGgYAFwPyAGASzI5AHBR6iUAcGMiBzBlNgDcnMoBgPUBOQCwQuIlALBKJgcA1gnlADLMBoCbTDkAsFzvJQDwxEQOADy0kgMAj+3kAMCTUzkA8OzYSwBo/4AUANxBIQOA95BIAKht4xEOUN3INO8BGjaziQWEmw3QtqGRFzAyyY7N/UA17JFwS/5vUEG8Pn8AAeaBBm01AhgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMDRUMTc6NDU6MjArMDE6MDDpm7GmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTA0VDE3OjQ1OjIwKzAxOjAwmMYJGgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Footer;