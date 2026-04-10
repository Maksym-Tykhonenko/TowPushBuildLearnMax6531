import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    TouchableOpacity as UjmnhbYtgb, Image,Animated as XswedcVfrt,
         Share as RfvbgtYhnm, Text as LkjhgfVbnm, View as QwazxPlokm, Dimensions as PoiuytRfds,
    Platform as PlokmnJuhb, PermissionsAndroid as ZaqwsxEdcr,
    
} from 'react-native';
import React, { useState as QazxswEdcv, useEffect as MnbvcxZaqs, useRef as XcvbnmLkjh } from 'react';
import ViewShot from 'react-native-view-shot';
import { tushperlanFinlsRidl as VfrtgbNhyt } from '../tushperlanFinlsRidl';
import { CameraRoll as YhnmjuIkol } from '@react-native-camera-roll/camera-roll';
import { ScrollView as PlokmjNuhb } from 'react-native-gesture-handler';

const { width: QazwsxEdcv, height: MnbvcxZaqw } = PoiuytRfds.get('window');

// Додаємо price для кожного скіна
const XswedcRfvbg = [
    {
        req: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/foimgsaves/chertezhy.png'), price: 0, id: 0,
    },
    {
        price: 3, req: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/foimgsaves/misto.png'), id: 1,
    },
    {
        req: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/foimgsaves/legobild.png'), id: 2, price: 5,
    },
    {
        id: 3, price: 10, req: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/foimgsaves/chetyryfony.png'),
    },
    {
        id: 4, req: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/foimgsaves/eyfilevavezha.png'), price: 25,
    },
    {
        id: 6, req: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/foimgsaves/dorogy.png'), price: 25,
    },
];

export default function FghjklMnbvc() {
    // Використовуємо paleworps як wallpapers
    const QwsxedCrvtArr = XswedcRfvbg.map(item => ({
        image: item.req,
        id: item.id,
    }));

    // Android permission logic (copied and renamed)
    const AskPermQaz = async () => {
        if (PlokmnJuhb.OS !== 'android') return true;
        try {
            const apiLevel = PlokmnJuhb.Version;
            if (apiLevel >= 33) {
                const granted = await ZaqwsxEdcr.request(
                    'android.permission.READ_MEDIA_IMAGES' as any,
                    {
                        title: 'Media Permission Required',
                        message: 'App needs access to your media to save wallpapers',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                return granted === ZaqwsxEdcr.RESULTS.GRANTED;
            } else {
                const granted = await ZaqwsxEdcr.request(
                    ZaqwsxEdcr.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message: 'App needs access to your storage to save wallpapers',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                return granted === ZaqwsxEdcr.RESULTS.GRANTED;
            }
        } catch (err) {
            return false;
        }
    };

    // Animated modal for save/share
    const ShowPreviewModalQaz = (text: string) => {
        SetPreviewTextQaz(text);
        SetPreviewVisibleQaz(true);
        XswedcVfrt.spring(PreviewAnimQaz, {
            toValue: 1,
            useNativeDriver: true,
            friction: 6,
            tension: 90,
        }).start();
        setTimeout(() => {
            XswedcVfrt.spring(PreviewAnimQaz, {
                toValue: 0,
                useNativeDriver: true,
                friction: 6,
                tension: 90,
            }).start(() => SetPreviewVisibleQaz(false));
        }, 1600);
    };

    // Save preview image
    const HandleSaveQaz = async (id: number) => {
        try {
            if (PlokmnJuhb.OS === 'android') {
                const hasPerm = await AskPermQaz();
                if (!hasPerm) {
                    ShowPreviewModalQaz('Permission denied');
                    return;
                }
            }
            const uri = await PreviewRefsQaz.current[id]?.capture();
            if (!uri) throw new Error('Failed to capture image');
            await YhnmjuIkol.save(uri, { type: 'photo' });
            ShowPreviewModalQaz('Saved to gallery!');
        } catch (e: any) {
            ShowPreviewModalQaz(`Error: ${e?.message || 'Unknown error'}`);
        }
    };






    // Share preview image
    const HandleShareQaz = async (id: number) => {
        try {
            const uri = await PreviewRefsQaz.current[id]?.capture();
            await RfvbgtYhnm.share({ url: uri });
        } catch (e) {
            ShowPreviewModalQaz('Error: Failed to share');
        }
    };






    const PreviewRefsQaz = XcvbnmLkjh<{ [key: number]: any }>({});

    const PreviewAnimQaz = XcvbnmLkjh(new XswedcVfrt.Value(0)).current;

    const [PreviewTextQaz, SetPreviewTextQaz] = QazxswEdcv('');

    const [PreviewVisibleQaz, SetPreviewVisibleQaz] = QazxswEdcv(false);

    return (
        <QwazxPlokm style={{ backgroundColor: 'transparent', alignItems: 'center', flex: 1, justifyContent: 'flex-start', }}>
            {/* Preview Save/Share Modal */}
            {PreviewVisibleQaz && (
                <XswedcVfrt.View
                    style={{
                        left: 0, position: 'absolute', top: MnbvcxZaqw * 0.3, right: 0,
                        opacity: PreviewAnimQaz, zIndex: 100, alignItems: 'center',
                        transform: [
                            {
                                scale: PreviewAnimQaz.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.92, 1],
                                }),
                            },
                        ],
                    }}
                    pointerEvents="none"
                >
                    <QwazxPlokm style={{
                        paddingHorizontal: QazwsxEdcv * 0.13,
                        paddingVertical: MnbvcxZaqw * 0.022,
                        borderRadius: QazwsxEdcv * 0.07,
                        borderWidth: 1,
                        backgroundColor: '#FFB70A',
                        borderColor: '#E9D274',
                    }}>
                        <LkjhgfVbnm style={{
                            color: '#fff',
                            fontFamily: VfrtgbNhyt.unuB,
                            fontSize: QazwsxEdcv * 0.055,
                            textAlign: 'center',
                        }}>
                            {PreviewTextQaz}
                        </LkjhgfVbnm>
                    </QwazxPlokm>
                </XswedcVfrt.View>
            )}

            <PlokmjNuhb contentContainerStyle={{
                paddingBottom: MnbvcxZaqw * 0.230523847291,
            }} showsVerticalScrollIndicator={false}>
                {/* Сітка шпалер 2x2 */}
                <QwazxPlokm style={{
                    flexWrap: 'wrap',width: QazwsxEdcv, justifyContent: 'center',alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    {QwsxedCrvtArr.map((wall, idx) => (
                        <QwazxPlokm  key={wall.id}  style={{      width: QazwsxEdcv * 0.44, margin: QazwsxEdcv * 0.02,borderRadius: QazwsxEdcv * 0.045,
                            }}
                        >
                            <ViewShot   ref={ref => { PreviewRefsQaz.current[wall.id] = ref; }} options={{ quality: 1, format: 'png', result: 'tmpfile' }}
                                style={{
                                    height: MnbvcxZaqw * 0.25, borderRadius: QazwsxEdcv * 0.04,width: QazwsxEdcv * 0.40,marginTop: QazwsxEdcv * 0.04,
                                    backgroundColor: '#fff',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image source={wall.image} style={{  height: '100%',borderRadius: QazwsxEdcv * 0.04,width: '100%',}}resizeMode="cover"
                                />
                            </ViewShot>
                            {/* Кнопки під зображенням */}
                            <QwazxPlokm style={{
                                bottom: QazwsxEdcv * 0.01,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                gap: QazwsxEdcv * 0.04,
                                position: 'absolute',
                                marginTop: QazwsxEdcv * 0.04,
                                flexDirection: 'row',
                            }}>
                                <UjmnhbYtgb
                                    onPress={() => HandleSaveQaz(wall.id)}
                                >
                                    <Image
                                        resizeMode="contain"
                                        source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/safizbrzhn.png')}
                                        style={{ width: QazwsxEdcv * 0.12, height: QazwsxEdcv * 0.12 }}
                                    />
                                </UjmnhbYtgb>
                                <UjmnhbYtgb onPress={() => HandleShareQaz(wall.id)} >
                                    <Image
                                        resizeMode="contain"
                                        source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/poshrare.png')}
                                        style={{ height: QazwsxEdcv * 0.12, width: QazwsxEdcv * 0.12, }}
                                    />
                                </UjmnhbYtgb>
                            </QwazxPlokm>
                        </QwazxPlokm>
                    ))}
                </QwazxPlokm>
            </PlokmjNuhb>
        </QwazxPlokm>
    );
}
