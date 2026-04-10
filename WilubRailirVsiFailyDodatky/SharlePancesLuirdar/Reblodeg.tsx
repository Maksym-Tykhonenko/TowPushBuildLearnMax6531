import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import { PursheBlurigrantdRaow } from '../LuiwoBilurCimpensRelna/PursheBlurigrantdRaow';
import readbloh from '../AreshuWilnarAsetyLibrow/readbloh';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState, } from 'react';
import {
    Text,View,TouchableOpacity,Dimensions,
    Share,
    Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const { width: W, height: H } = Dimensions.get('window');

const PADDING = W * 0.05;
const BORDER_RADIUS = W * 0.05;
const IMAGE_HEIGHT = H * 0.18;
const CARD_WIDTH = W * 0.92;
const BUTTON_HEIGHT = H * 0.06;
const BUTTON_RADIUS = BUTTON_HEIGHT * 0.5;

const getSaveKey = (idx: number) => `saved_architect_${idx}`;

export default function Reblodeg() {
    const [showDetails, setShowDetails] = useState<number | null>(null);
    const [saved, setSaved] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        (async () => {
            const all = {};
            for (let i = 0; i < readbloh.length; ++i) {
                const val = await AsyncStorage.getItem(getSaveKey(i));
                all[i] = val === '1';
            }
            setSaved(all);
        })();
    }, []);

    const handleSave = async (idx: number) => {
        const newSaved = !saved[idx];
        setSaved({ ...saved, [idx]: newSaved });
        await AsyncStorage.setItem(getSaveKey(idx), newSaved ? '1' : '0');
    };

    const handleShare = async (idx: number) => {
        try {
            await Share.share({
                message: readbloh[idx].title + '\n\n' + readbloh[idx].text,
            });
        } catch (e) { }
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            // paddingTop: H * 0.019,
            width: W,
        }}>
            {/* Видаляємо PursheBlurigrantdRaow з-під усього екрану */}
            {showDetails === null ? (
                <ScrollView style={{ width: W }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: H * 0.19,
                        alignItems: 'center',
                        paddingHorizontal: W * 0.04,
                    }}
                >
                    {readbloh.map((item, idx) => {
                        return (
                            <View
                                key={idx}
                                style={{
                                    borderRadius: BORDER_RADIUS * 1.4,
                                    // height: H * 0.4,
                                    width: CARD_WIDTH,
                                    marginBottom: H * 0.03,
                                    elevation: 4,
                                    alignItems: 'center',
                                    borderWidth: 3,
                                    borderColor: '#096992', // синя рамка
                                    backgroundColor: '#fff',
                                    overflow: 'hidden',
                                }}>
                                {/* Градієнт тільки під текстом і кнопкою */}
                                <View style={{
                                    alignItems: 'center',
                                    position: 'relative',
                                    justifyContent: 'flex-end',
                                    width: '100%',
                                    flex: 1,
                                    overflow: 'hidden',
                                }}>
                                    <PursheBlurigrantdRaow style={{
                                    }} />
                                    <View style={{
                                        width: '100%',
                                        padding: PADDING * 0.7,
                                        alignItems: 'center',
                                        zIndex: 1,
                                    }}>
                                        <Image source={item.image} style={{
                                                borderWidth: W * 0.004,
                                                height: IMAGE_HEIGHT,
                                                resizeMode: 'cover',
                                                borderRadius: BORDER_RADIUS * 1.4,
                                                width: '100%',
                                                borderColor: '#096992',
                                            }}
                                        />
                                        <Text style={{
                                            textAlign: 'center',
                                            color: '#FEB70A',
                                            fontFamily: tushperlanFinlsRidl.unuB,
                                            marginTop: H * 0.01,
                                            marginBottom: H * 0.01,
                                            textShadowColor: '#1a9edb',
                                            fontSize: W * 0.06,
                                            textShadowOffset: { width: 0, height: 2 },
                                            textShadowRadius: 2,
                                        }}>
                                            {item.title + "?"}
                                        </Text>
                                        <Text style={{
                                            marginBottom: H * 0.025,
                                            fontFamily: tushperlanFinlsRidl.unuRel,
                                            textAlign: 'center',
                                            color: '#fff',
                                            fontSize: W * 0.045,
                                        }}>
                                            {item.text.split('.').slice(0, 1).join('.') + '...'}
                                        </Text>
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => setShowDetails(idx)}
                                            style={{
                                                height: BUTTON_HEIGHT,
                                                backgroundColor: '#FEB70A',
                                                minWidth: W * 0.32,
                                                shadowOffset: { width: 0, height: 2 },
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                alignSelf: 'center',
                                                paddingHorizontal: W * 0.08,
                                                marginTop: H * 0.01,
                                                shadowColor: '#000',
                                                shadowOpacity: 0.1,
                                                shadowRadius: 4,
                                                borderRadius: BUTTON_RADIUS,
                                            }}>
                                            <Text style={{
                                                fontFamily: tushperlanFinlsRidl.unuMei,
                                                fontSize: W * 0.05,
                                                color: '#222',
                                            }}>
                                                More
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            ) : (
                (() => {
                    const idx = showDetails;
                    const item = readbloh[idx];
                    const saveIcon = saved[idx]
                        ? require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/fasedv.png')
                        : require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/halpcit.png');
                    return (
                        <>
                            <ScrollView contentContainerStyle={{
                                alignItems: 'center',
                                paddingBottom: H * 0.21,
                            }} showsVerticalScrollIndicator={false} style={{ width: W }}>
                                <Image
                                    source={item.image}
                                    style={{
                                        resizeMode: 'cover',
                                        borderWidth: W * 0.004,
                                        width: '91%',
                                        borderRadius: BORDER_RADIUS * 1.2,
                                        borderColor: '#096992',
                                        height: H * 0.18,
                                    }}
                                />

                                <View style={{
                                    overflow: 'visible',
                                    alignItems: 'center',
                                    width: CARD_WIDTH,
                                    borderRadius: BORDER_RADIUS * 1.4,
                                    backgroundColor: 'transparent',
                                }}>
                                    <View style={{
                                        backgroundColor: 'transparent',
                                        borderRadius: BORDER_RADIUS * 1.4,
                                        borderWidth: 3,
                                        borderColor: '#096992',
                                        overflow: 'hidden',
                                        width: '100%',
                                        marginTop: H * 0.01,
                                    }}>
                                        <View style={{
                                            borderRadius: BORDER_RADIUS * 1.4,
                                            backgroundColor: 'transparent',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            width: '100%',
                                        }}>
                                            <PursheBlurigrantdRaow style={{
                                            }} />
                                            <View style={{
                                                paddingBottom: H * 0.02,
                                                paddingTop: H * 0.01,
                                                alignItems: 'center',
                                                paddingHorizontal: W * 0.06,
                                            }}>
                                                <Text style={{
                                                    color: '#FEB70A',
                                                    fontSize: W * 0.07,
                                                    textAlign: 'center',
                                                    marginBottom: H * 0.012,
                                                    textShadowRadius: 2,
                                                    textShadowColor: '#A27508',
                                                    textShadowOffset: { width: 0, height: 2 },
                                                    fontFamily: tushperlanFinlsRidl.unuB,
                                                }}>
                                                    {item.title + "?"}
                                                </Text>
                                                <Text style={{
                                                    marginBottom: H * 0.012,
                                                    fontSize: W * 0.035,
                                                    color: '#fff',
                                                    lineHeight: W * 0.06,
                                                    textAlign: 'center',
                                                    fontFamily: tushperlanFinlsRidl.unuRel,
                                                }}>
                                                    {item.text}
                                                </Text>
                                            </View>
                                            {/* Bottom buttons row */}
                                            <View style={{
                                                alignItems: 'center',






                                                justifyContent: 'center',






                                                width: '100%',






                                                marginTop: H * 0.01,






                                                marginBottom: H * 0.01,

                                                flexDirection: 'row',
                                            }}>
                                                <TouchableOpacity activeOpacity={0.8} onPress={() => { setShowDetails(null) }}
                                                    style={{
                                                        alignSelf: 'center',
                                                        borderRadius: BUTTON_RADIUS * 1.2,
                                                        height: BUTTON_HEIGHT * 0.95,
                                                        width: W * 0.28,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        marginRight: W * 0.04,
                                                        paddingHorizontal: W * 0.08,
                                                        backgroundColor: '#FEB70A',
                                                    }}>
                                                    <Text style={{
                                                        fontFamily: tushperlanFinlsRidl.unuMei,
                                                        fontSize: W * 0.05,
                                                        color: '#222',
                                                    }} numberOfLines={1} adjustsFontSizeToFit>
                                                        Back
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => handleShare(idx)}
                                                    style={{
                                                        justifyContent: 'center',
                                                        width: W * 0.28,
                                                        borderRadius: BUTTON_RADIUS * 1.2,
                                                        height: BUTTON_HEIGHT * 0.95,
                                                        alignItems: 'center',
                                                        alignSelf: 'center',
                                                        marginRight: W * 0.04,
                                                        paddingHorizontal: W * 0.08,
                                                        backgroundColor: '#FEB70A',
                                                    }}>
                                                    <Text style={{ fontSize: W * 0.05, fontFamily: tushperlanFinlsRidl.unuMei, color: '#222',}} numberOfLines={1} adjustsFontSizeToFit>
                                                        Share
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => handleSave(idx)}
                                                >
                                                    <Image
                                                        source={saveIcon}
                                                        style={{
                                                            height: BUTTON_HEIGHT * 1.1,
                                                            resizeMode: 'contain',
                                                            width: BUTTON_HEIGHT * 1.1,
                                                        }}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </>
                    );
                })()
            )}
        </View>
    );
}
