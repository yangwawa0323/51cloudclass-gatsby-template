import { IValueDescriptor } from "gatsby/dist/schema/infer/inference-metadata";

// this file contained each of style array
/*******************************************************************************
 * 1. Circle Color
 */
type CircleColorOptions =
    | 'Blue'
    | 'Red'
    | 'Green'
    | 'Yellow'
    | 'Purple'
    | 'Orange'
    | 'Black';

export const CircleColorArray: Array<CircleColorOptions> = [
    'Blue',
    'Red',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Black',
];

/********************************************************************
 * 2. Skin Color
 */
type SkinColorOptions =
    | 'Gray'
    | 'Tanned'
    | 'Yellow'
    | 'Pale'
    | 'Light'
    | 'Brown'
    | 'DarkBrown'
    | 'Black';

export const SkinColorArray: Array<SkinColorOptions> = [
    'Gray',
    'Tanned',
    'Yellow',
    'Pale',
    'Light',
    'Brown',
    'DarkBrown',
    'Black',
];

/**********************************************************************
 * 3. Clothes
 */
type ClotheOptions =
    | 'None'
    | 'BlazerShirt'
    | 'BlazerSweater'
    | 'CollarSweater'
    | 'GraphicShirt'
    | 'Hoodie'
    | 'Overall'
    | 'ShirtCrewNeck'
    | 'ShirtScoopNeck'
    | 'ShirtVNeck';

export const ClotheArray: Array<ClotheOptions> = [
    'None',
    'BlazerShirt',
    'BlazerSweater',
    'CollarSweater',
    'GraphicShirt',
    'Hoodie',
    'Overall',
    'ShirtCrewNeck',
    'ShirtScoopNeck',
    'ShirtVNeck',
];

/************************************************************************
 * 4. Clothes Color
 */
type ClotheColorOptions =
    | 'Black'
    | 'Blue01'
    | 'Blue02'
    | 'Blue03'
    | 'Gray01'
    | 'Gray02'
    | 'Heather'
    | 'PastelBlue'
    | 'PastelGreen'
    | 'PastelOrange'
    | 'PastelRed'
    | 'PastelYellow'
    | 'Pink'
    | 'Red'
    | 'White';

export const ClotheColorArray: Array<ClotheColorOptions> = [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White',
];

/*****************************************************************************
 * 5. Clothes Graphic
 */
type ClotheGraphicOptions =
    | 'None'
    | 'Bat'
    | 'Bear'
    | 'Cumbia'
    | 'Deer'
    | 'Diamond'
    | 'Hola'
    | 'Pizza'
    | 'Resist'
    | 'Selena'
    | 'Skull'
    | 'SkullOutline';

export const ClotheGraphicArray: Array<ClotheGraphicOptions> = [
    'None',
    'Bat',
    'Bear',
    'Cumbia',
    'Deer',
    'Diamond',
    'Hola',
    'Pizza',
    'Resist',
    'Selena',
    'Skull',
    'SkullOutline',
];

/****************************************************************************
 * 6. Mouth
 */
type MouthOptions =
    | 'None'
    | 'Concerned'
    | 'Default'
    | 'Disbelief'
    | 'Eating'
    | 'Grimace'
    | 'Sad'
    | 'ScreamOpen'
    | 'Serious'
    | 'Smile'
    | 'Tongue'
    | 'Twinkle'
    | 'Vomit';

export const MouthArray: Array<MouthOptions> = [
    'None',
    'Concerned',
    'Default',
    'Disbelief',
    'Eating',
    'Grimace',
    'Sad',
    'ScreamOpen',
    'Serious',
    'Smile',
    'Tongue',
    'Twinkle',
    'Vomit',
];

/****************************************************************************
 * 7. Eyes
 */
type EyesOptions =
    | 'None'
    | 'Close'
    | 'Cry'
    | 'Default'
    | 'Dizzy'
    | 'EyeRoll'
    | 'Happy'
    | 'Hearts'
    | 'Side'
    | 'Squint'
    | 'Surprised'
    | 'Wink'
    | 'WinkWacky';

export const EyesArray: Array<EyesOptions> = [
    'None',
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Hearts',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky',
];

/*************************************************************************
 * 8. Eyebrows
 */

type EyebrowsOptions =
    | 'None'
    | 'Angry'
    | 'AngryNatural'
    | 'Default'
    | 'DefaultNatural'
    | 'FlatNatural'
    | 'FrownNatural'
    | 'RaisedExcited'
    | 'RaisedExcitedNatural'
    | 'SadConcerned'
    | 'SadConcernedNatural'
    | 'UnibrowNatural'
    | 'UpDown'
    | 'UpDownNatural';

export const EyebrowsArray: Array<EyebrowsOptions> = [
    'None',
    'Angry',
    'AngryNatural',
    'Default',
    'DefaultNatural',
    'FlatNatural',
    'FrownNatural',
    'RaisedExcited',
    'RaisedExcitedNatural',
    'SadConcerned',
    'SadConcernedNatural',
    'UnibrowNatural',
    'UpDown',
    'UpDownNatural',
];

/*****************************************************************************
 * 9. Hair
 */
type HairOptions =
    | 'None'
    | 'Eyepatch'
    | 'Hat'
    | 'Hijab'
    | 'Turban'
    | 'WinterHat1'
    | 'WinterHat2'
    | 'WinterHat3'
    | 'WinterHat4'
    | 'LongHairBigHair'
    | 'LongHairBob'
    | 'LongHairBun'
    | 'LongHairCurly'
    | 'LongHairCurvy'
    | 'LongHairDreads'
    | 'LongHairFrida'
    | 'LongHairFro'
    | 'LongHairFroBand'
    | 'LongHairMiaWallace'
    | 'LongHairNotTooLong'
    | 'LongHairShavedSides'
    | 'LongHairStraight'
    | 'LongHairStraight2'
    | 'LongHairStraightStrand'
    | 'NoHair'
    | 'ShortHairDreads01'
    | 'ShortHairDreads02'
    | 'ShortHairFrizzle'
    | 'ShortHairShaggy'
    | 'ShortHairShaggyMullet'
    | 'ShortHairShortCurly'
    | 'ShortHairShortFlat'
    | 'ShortHairShortRound'
    | 'ShortHairShortWaved'
    | 'ShortHairSides'
    | 'ShortHairTheCaesar'
    | 'ShortHairTheCaesarSidePart';

export const HairArray: Array<HairOptions> = [
    'None',
    'Eyepatch',
    'Hat',
    'Hijab',
    'Turban',
    'WinterHat1',
    'WinterHat2',
    'WinterHat3',
    'WinterHat4',
    'LongHairBigHair',
    'LongHairBob',
    'LongHairBun',
    'LongHairCurly',
    'LongHairCurvy',
    'LongHairDreads',
    'LongHairFrida',
    'LongHairFro',
    'LongHairFroBand',
    'LongHairMiaWallace',
    'LongHairNotTooLong',
    'LongHairShavedSides',
    'LongHairStraight',
    'LongHairStraight2',
    'LongHairStraightStrand',
    'NoHair',
    'ShortHairDreads01',
    'ShortHairDreads02',
    'ShortHairFrizzle',
    'ShortHairShaggy',
    'ShortHairShaggyMullet',
    'ShortHairShortCurly',
    'ShortHairShortFlat',
    'ShortHairShortRound',
    'ShortHairShortWaved',
    'ShortHairSides',
    'ShortHairTheCaesar',
    'ShortHairTheCaesarSidePart',
];

/*******************************************************************
 * 10. Hair Color
 */

type HairColorOptions =
    | 'Auburn'
    | 'Black'
    | 'Blonde'
    | 'BlondeGolden'
    | 'Brown'
    | 'BrownDark'
    | 'PastelPink'
    | 'Platinum'
    | 'Red'
    | 'SilverGray';

export const HairColorArray: Array<HairColorOptions> = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Platinum',
    'Red',
    'SilverGray',
];

/*****************************************************************************
 * 11. Hat Color
 */
type HatColorOptions =
    | 'Black'
    | 'Blue01'
    | 'Blue02'
    | 'Blue03'
    | 'Gray01'
    | 'Gray03'
    | 'Heather'
    | 'PastelBlue'
    | 'PastelGreen'
    | 'PastelOrange'
    | 'PastelRed'
    | 'PastelYellow'
    | 'Pink'
    | 'Red'
    | 'White';

export const HatColorArray: Array<HatColorOptions> = [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray03',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White',
];

/***************************************************************************
 * 12. Facial Hair
 */
type FacialHairStyleOptions =
    | 'None'
    | 'BeardLight'
    | 'BeardMajestic'
    | 'BeardMedium'
    | 'Blank'
    | 'MoustacheFancy'
    | 'MoustacheMagnum';

export const FacialHairStyleArray: Array<FacialHairStyleOptions> = [
    'None',
    'BeardLight',
    'BeardMajestic',
    'BeardMedium',
    'Blank',
    'MoustacheFancy',
    'MoustacheMagnum',
];

/************************************************************************
 * 13. Facial Hair Color
 */
type FacialHairColorOptions =
    | 'Auburn'
    | 'Black'
    | 'Blonde'
    | 'BlondeGolden'
    | 'Brown'
    | 'BrownDark'
    | 'PastelPink'
    | 'Platinum'
    | 'Red'
    | 'SilverGray';

export const FacialHairColorArray: Array<FacialHairColorOptions> = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Platinum',
    'Red',
];

/*********************************************************************
 * 14. Glasses Style
 */
type GlassesStyleOptions =
    | 'None'
    | 'Blank'
    | 'Kurt'
    | 'Prescription01'
    | 'Prescription02'
    | 'Round'
    | 'Sunglasses'
    | 'Wayfarers';

export const GlassesStyleArray: Array<GlassesStyleOptions> = [
    'None',
    'Blank',
    'Kurt',
    'Prescription01',
    'Prescription02',
    'Round',
    'Sunglasses',
    'Wayfarers',
];

interface IAvatarValue {
    label: string,
    attributeName: string,
    options: Array<CircleColorOptions
        | SkinColorOptions
        | ClotheOptions
        | ClotheColorOptions
        | ClotheGraphicOptions
        | MouthOptions
        | EyesOptions
        | EyebrowsOptions
        | HairOptions
        | HairColorOptions
        | HatColorOptions
        | FacialHairStyleOptions
        | FacialHairColorOptions
        | GlassesStyleOptions
    >
}


type Options = {
    color: IAvatarValue,
    skin: IAvatarValue,
    clothes: IAvatarValue,
    clothesColor: IAvatarValue,
    clothesGraphic: IAvatarValue,
    mouth?: IAvatarValue,
    eyes?: IAvatarValue,
    eyebrows?: IAvatarValue,
    hair?: IAvatarValue,
    hairColor?: IAvatarValue,
    hatColor?: IAvatarValue,
    facialHairStyle?: IAvatarValue,
    facialHairColor?: IAvatarValue,
    glassesStyle?: IAvatarValue,
};

const AvataaarOptions: Options = {
    color: { label: '颜色', attributeName: 'avatarStyle', options: CircleColorArray },
    skin: { label: '肤色', attributeName: 'skinColor', options: SkinColorArray },
    clothes: { label: '衣服', attributeName: 'clothesType', options: ClotheArray },
    clotheColor: { label: '衣服颜色', attributeName: 'clotheColor', options: ClotheColorArray },
    clotheGraphic: { label: '衣服图像', attributeName: 'clotheGraphicType', options: ClotheGraphicArray },
    mouth: { label: '嘴巴', attributeName: 'mouthType', options: MouthArray },
    eyes: { label: '眼睛', attributeName: 'eyesType', options: EyesArray },
    eyebrows: { label: '眉毛', attributeName: 'eyebrowsType', options: EyebrowsArray },
    hair: { label: '头发', attributeName: 'hairType', options: HairArray },
    hairColor: { label: '头发颜色', attributeName: 'hairColor', options: HairColorArray },
    facialHairStyle: { label: "胡须", options: FacialHairStyleArray },
    facialHairColor: { label: "胡须颜色", options: FacialHairColorArray },
    glassesStyle: { label: "眼镜", options: GlassesStyleArray },


}
export default AvataaarOptions;