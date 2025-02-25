


const verses = [
    "The Lord is near to all who call upon Him, To all who call upon Him in truth. Psalms- 145:18 NKJV",
    "God is in the midst of her, she shall not be moved; God shall help her, just at the break of dawn. Psalms- 46:5 NKJV ",
    "But now, O Lord, You are our Father; We are the clay, and You our potter; And all we are the work of Your hand. Isaiah- 64:8 NKJV ",
    "Set your mind on things above, not on things on the earth. Colossians- 3:2 NKJV",
    "For God has not given us a spirit of fear, but of power and of love and of a sound mind. II Timothy- 1:7 NKJV",
    "But if the Spirit of Him who raised Jesus from the dead dwells in you, He who raised Christ from the dead will also give life to your mortal bodies through His Spirit who dwells in you. Romans- 8:11 NKJV",
    "but grow in the grace and knowledge of our Lord and Savior Jesus Christ. To Him be the glory both now and forever. Amen. II Peter- 3:8 NKJV",
    "Let the words of my mouth and the meditation of my heart Be acceptable in Your sight, O Lord, my strength and my Redeemer. Psalms- 19:14 NKJV",
    "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus. Philippians- 4:6-7 NKJV",
    "Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with My righteous right hand. Isaiah- 41:10 NKJV",
    "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth! Psalms- 46:10 NKJV",
    "Your word is a lamp to my feet And a light to my path. Psalms- 119:105 NKJV",
    "I can do all things through Christ who strengthens me. Philippians- 4:13 NKJV",
    "This hope we have as an anchor of the soul, both sure and steadfast, and which enters the Presence behind the veil. Hebrews- 6:19 NKJV",
    "Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go. Joshua- 1:9 NKJV",
    "For where your treasure is, there your heart will be also. Luke- 12:34 NKJV",
    "A man’s heart plans his way, But the Lord directs his steps. Proverbs- 16:9 NKJV",
    "Delight yourself also in the Lord, And He shall give you the desires of your heart. Commit your way to the Lord, Trust also in Him, And He shall bring it to pass. Psalms- 37:4-5 NKJV",
    "And we know that all things work together for good to those who love God, to those who are the called according to His purpose. Romans- 8:28 NKJV",
    "What then shall we say to these things? If God is for us, who can be against us? Romans - 8:31  NKJV",
    "You prepare a table before me in the presence of my enemies; You anoint my head with oil; My cup runs over. Surely goodness and mercy shall follow me All the days of my life; And I will dwell in the house of the Lord Forever. Psalms- 23:5-6 NKJV",
    "For the mountains shall depart And the hills be removed, But My kindness shall not depart from you, Nor shall My covenant of peace be removed,” Says the Lord, who has mercy on you. Isaiah- 54:10 NKJV",
    "He shall cover you with His feathers, And under His wings you shall take refuge; His truth shall be your shield and buckler. Psalms- 91:4 NKJV",
    "These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world. John- 16:33 NKJV",
    "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope. Jeremiah- 29:11 NKJV",
    "Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths. Proverbs- 3:5-6 NKJV",
    "The Lord your God in your midst, The Mighty One, will save; He will rejoice over you with gladness, He will quiet you with His love, He will rejoice over you with singing.  Zephaniah- 3-17 NKJV",
    "The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Spirit be with you all. Amen.  II Corinthians- 13:14 NKJV",
    "But seek first the kingdom of God and His righteousness, and all these things shall be added to you. Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble. Mathew- 6:33-34 NKJV",
    "Be kindly affectionate to one another with brotherly love, in honor giving preference to one another; not lagging in diligence, fervent in spirit, serving the Lord; rejoicing in hope, patient in tribulation, continuing steadfastly in prayer; Romans- 12:10-12 NKJV",
    "Let your light so shine before men, that they may see your good works and glorify your Father in heaven.  Matthew- 5:16 NKJV",
    "From the end of the earth I will cry to You, When my heart is overwhelmed; Lead me to the rock that is higher than I. For You have been a shelter for me, A strong tower from the enemy.  Psalms- 61:2-3 NKJV",
    "Then Jesus said to His disciples, “If anyone desires to come after Me, let him deny himself, and take up his cross, and follow Me.  Matthew- 16:24 NKJV",
    "A merry heart does good, like medicine, But a broken spirit dries the bones. Proverbs- 17:22 NKJV",
    "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. John- 3:16 NKJV",
    "The Lord is my light and my salvation; Whom shall I fear? The Lord is the strength of my life; Of whom shall I be afraid?   Psalms- 27:1 NKJV",
    "Now faith is the substance of things hoped for, the evidence of things not seen.  Hebrews-11:1 NKJV",
    "Jesus answered and said to him, “What I am doing you do not understand now, but you will know after this.  John- 13:7 NKJV",
    "But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint.  Isaiah-40:31 NKJV",
    "If you abide in Me, and My words abide in you, you will ask what you desire, and it shall be done for you.  John- 15:7 NKJV",
    "Therefore humble yourselves under the mighty hand of God, that He may exalt you in due time, casting all your care upon Him, for He cares for you. Peter- 5:6-7 NKJV",
    "Do not rejoice over me, my enemy; When I fall, I will arise; When I sit in darkness, The Lord will be a light to me.  Micah- 7:8 NKJV",
    "For I consider that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us. Romans- 8:18 NKJV",
    "He heals the brokenhearted And binds up their wounds. He counts the number of the stars; He calls them all by name. Psalms- 147:3-4 NKJV",
    "The Lord will fight for you, and you shall hold your peace.  Exodus- 14:14 NKJV",
    "There is no fear in love; but perfect love casts out fear, because fear involves torment. But he who fears has not been made perfect in love. We love Him because He first loved us.  I John- 4:18-19 NKJV",
    "Blessed is she who believed, for there will be a fulfillment of those things which were told her from the Lord.  Luke- 1:45 NKJV",
    "He has made everything beautiful in its time. Also He has put eternity in their hearts, except that no one can find out the work that God does from beginning to end.  Ecclesiastes- 3:11 NKJV"
];

function displayVerse() {
    const date = new Date();
    const verseIndex = date.getDate() % verses.length; // Rotate verses daily
    document.getElementById('daily-verse').innerText = verses[verseIndex];
}

window.onload = displayVerse;
