import AsyncStorage from '@react-native-async-storage/async-storage';





import { useNavigation as VbqweLkjmz } from '@react-navigation/native';
import { Dimensions as QazwsXedcr, Image as PloikMnbvc, View as RtyuiFghjk } from 'react-native';
import React, { useEffect as ZxcvbNmlkj } from 'react';
const JkliuyTrewq = 'hfsu-jdsfy71mfpqa82nda0fbtyabq[mntya;dner72nfsohug4f';





import WqazxCvbnm from '../LuiwoBilurCimpensRelna/RodisjLoainsdfApdm';



import { SafeAreaView as FqwepZmxnv } from 'react-native-safe-area-context';

const MnbvcXswza = (): React.ReactElement => {
    const QweasDzxcv = VbqweLkjmz();

    const { width: UioplMnbvc, height: AsdfgHjklq } = QazwsXedcr.get('window');




    ZxcvbNmlkj(() => {

        let PoiuyTrews = true;
        const LkjhgFdsaq = Math.floor(Math.random() * 900);

        const XcvbnMlkjh = async () => {
            try {
                const QazwsXedcv = await AsyncStorage.getItem(JkliuyTrewq);
                if (!QazwsXedcv) {
                    await AsyncStorage.setItem(JkliuyTrewq, 'scratched');
                }

                //setTimeout(() => {
                //    if (!PoiuyTrews) return;
//
                //    setTimeout(() => {
                //        if (!PoiuyTrews) return;
                //        QweasDzxcv.replace(
                //            QazwsXedcv ? 'HupowrtoKorntelnrReild' : 'BilshdRenaOnbrelkin'
                //        );
                //    }, 1000 + LkjhgFdsaq);
                //}, 3000);
            } catch (VbnmlKjhgf) {
                if (__DEV__) console.warn('MnbvcXswza::fail', VbnmlKjhgf);
            }
        };

        XcvbnMlkjh();

        return () => {
            PoiuyTrews = false;
        };
    }, [QweasDzxcv, UioplMnbvc]);

    return (
        <FqwepZmxnv style={{
            height: AsdfgHjklq,
        width: UioplMnbvc,      justifyContent: 'center', alignItems: 'center',
            flex: 1,
        }}>
            <PloikMnbvc resizeMode="cover" style={{
                zIndex: 0, height: AsdfgHjklq * 1.2023421,position: 'absolute',
                
                width: UioplMnbvc, 
            }} source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/cityforn.png')}/>

            <PloikMnbvc resizeMode="cover" style={{   borderRadius: UioplMnbvc * 0.1,position: 'absolute',zIndex: 0, height: UioplMnbvc * 0.7,  width: UioplMnbvc * 0.7,}}source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/malceon.png')}/>

            <RtyuiFghjk style={{ width: UioplMnbvc * 0.8, alignSelf: 'center', position: 'absolute',bottom: AsdfgHjklq * 0.08,}}>
                <WqazxCvbnm />
            </RtyuiFghjk>
        </FqwepZmxnv>
    );
};

export default MnbvcXswza;
