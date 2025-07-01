import { Box, Stack } from "@mui/material"



const Footer=() =>{
    return(
        <Stack className={"footer-container"}>
            <Stack className={"main"}>
                <Stack className={"left"}>
                    <Box component={"div"} className={"footer-box"}>
                        <img src="/public/img/logo/logoWhite.svg" alt="" className={"logo"}/>  
                    </Box>
                    <Box component={"div"} className={"footer-box"}>
                        <span> total free customer care</span>
                        <p>+821065732882</p>
                    </Box>
                    <Box component={"div"} className={"footer-box"}>
                        <span> nee live</span>
                        <p>+821065732882</p>
                        <span>Support?</span>
                    </Box>
                    <Box component={"div"} className={"footer-box"}>
                        <p>follow us on social media </p>
                        <div className={"media-box"}>
								<FacebookOutlinedIcon />
								<TelegramIcon />
								<InstagramIcon />
								<TwitterIcon />
							</div>
                    </Box>
                </Stack>
                <Stack className={"right"}>
                    <Box component={"div"} className={"top"}>
                        <strong>keep yourself up to date</strong>
                        <div>
                            <input type="text" placeholder={"Your Email"}/>
                            <span>Subscribe</span>

                        </div>
                        <Box component={"div"} className={"bottom"}>
                        <div>
								<strong>Popular Search</strong>
								<span>Property for Rent</span>
								<span>Property Low to hide</span>
							</div>
							<div>
								<strong>Quick Links</strong>
								<span>Terms of Use</span>
								<span>Privacy Policy</span>
								<span>Pricing Plans</span>
								<span>Our Services</span>
								<span>Contact Support</span>
								<span>FAQs</span>
							</div>
							<div>
								<strong>Discover</strong>
								<span>Seoul</span>
								<span>Gyeongido</span>
								<span>Busan</span>
								<span>Jejudo</span>
							</div>
                        </Box>
                    </Box>
                </Stack>
                <Stack className={"second"}>
                    <span>Nestar - All rights reserved.Nestar2024</span>
                    <span>Privacy . Terms . Sitemap</span>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Footer;