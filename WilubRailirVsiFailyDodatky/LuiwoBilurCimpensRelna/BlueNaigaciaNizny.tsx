import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import { PursheBlurigrantdRaow } from './PursheBlurigrantdRaow';
const { width: wijdf, height: hewifljs } = QodfInfOIqssf.get('window');
import React from 'react';
import {
    Image as OdOqnfdNqumn,
    View as OqpdfnHsoMPAd,
    Dimensions as QodfInfOIqssf,
    TouchableOpacity as Taxcipsm,
    Text as Txetiimogs,

} from 'react-native';

const knopNobtsAri = [
    {
        imbarsoij: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/ilcodings/homush.png'),
        paingsoi: 'Anwers Kwizik Tyt',
        forBunt: 'Home',
    },
    {
        forBunt: 'Blog',
        paingsoi: 'Blog',
        imbarsoij: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/ilcodings/blog.png'),
    },
    {
        paingsoi: 'Streak',
        imbarsoij: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/ilcodings/streak.png'),
        forBunt: 'Streak',
    },
    {
        imbarsoij: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/ilcodings/game.png'),

        forBunt: 'Game',

        paingsoi: 'Game',
    },
    {
        paingsoi: 'Collection',
        imbarsoij: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/ilcodings/collection.png'),
        forBunt: 'Collection',
    },
    {
        forBunt: 'Facts',
        paingsoi: 'Facts',
        imbarsoij: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/ilcodings/facts.png'),
    },
];

type JerctPorpAqoi = {
    klypt: string;
    steLykipterNfo: (val: any) => void;
};

const BlueNaigaciaNizny: React.FC<JerctPorpAqoi> = ({ klypt, steLykipterNfo }) => (
    <OqpdfnHsoMPAd style={{
        alignItems: 'center',
        alignSelf: 'center',justifyContent: 'center',        height: hewifljs * 0.1,
        bottom: hewifljs * 0.025,        zIndex: 10,
borderWidth: wijdf * 0.004,
        width: wijdf * 0.93,borderRadius: wijdf * 0.06, position: 'absolute',
        borderColor: '#096992',
        overflow: 'hidden',
    }}>
        <PursheBlurigrantdRaow />
        <OqpdfnHsoMPAd style={{
            height: '100%',
            width: '98%',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
        }}>
            {knopNobtsAri.map((btn, idx) => (
                <Taxcipsm key={idx} onPress={() => steLykipterNfo(btn.paingsoi)} style={{
                    alignItems: 'center',
                    width: wijdf * 0.135,
                    height: wijdf * 0.135,
                    borderRadius: wijdf * 0.04,
                    backgroundColor: '#FFB70A',
                    opacity: klypt === btn.paingsoi ? 1 : 0.4,
                    justifyContent: 'center',
                }}>
                    <OdOqnfdNqumn
                        source={btn.imbarsoij}
                        style={{
                            height: wijdf * 0.08,
                            width: wijdf * 0.08,
                        }}
                        resizeMode="contain"
                    />
                    {klypt === btn.paingsoi && (
                        <Txetiimogs style={{
                            textAlign: 'center',
                            fontFamily: tushperlanFinlsRidl.unuRel,
                            paddingHorizontal: wijdf * 0.01,
                            fontSize: wijdf * 0.03,
                        }} numberOfLines={1} adjustsFontSizeToFit>
                            {btn.forBunt}
                        </Txetiimogs>
                    )}
                </Taxcipsm>
            ))}
        </OqpdfnHsoMPAd>

    </OqpdfnHsoMPAd>
);

export default BlueNaigaciaNizny;
