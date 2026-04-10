import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    FlatList,
    Image,
    Dimensions,
} from 'react-native';
import { PursheBlurigrantdRaow } from '../LuiwoBilurCimpensRelna/PursheBlurigrantdRaow';
import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';

const { width: widht, height: hiet } = Dimensions.get('window');

const BUILDING_ITEMS = [
    { id: 1, name: 'House', image: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/elmstobuild/oldhouse.png') },
    { id: 2, name: 'Chest', image: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/elmstobuild/intrest.png') },
    { id: 3, name: 'Columns', image: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/elmstobuild/kolucnigs.png') },
    { id: 4, name: 'Bank', image: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/elmstobuild/kirpichwindow.png') },
    { id: 5, name: 'Cabin', image: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/elmstobuild/dereviyane.png') },
];

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function BulidinToureFro({ onGameStateChange, setifoPanscNweo }: { onGameStateChange?: (state: string) => void, setifoPanscNweo?: (val: any) => void }) {
    const [gameState, setGameState] = useState('initial'); // 'initial', 'preview', 'playing', 'finished'
    const [correctTower, setCorrectTower] = useState(BUILDING_ITEMS);
    const [userTower, setUserTower] = useState(Array(5).fill(null));
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const itemSize = widht * 0.18;
    const itemRadius = itemSize * 0.15;
    const padding = widht * 0.04;
    const blockSize = itemSize * 1.4;

    useEffect(() => {
        // On mount or when starting a new game, shuffle and set both randomTower and correctTower
        const shuffled = shuffleArray(BUILDING_ITEMS);
        setCorrectTower(shuffled);
    }, []);

    useEffect(() => {
        if (gameState === 'preview') {
            const timer = setTimeout(() => {
                setGameState('playing');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [gameState]);

    useEffect(() => {
        onGameStateChange?.(gameState);
    }, [gameState]);

    const startGame = () => {
        // Shuffle and set both randomTower and correctTower at the start of each game
        const shuffled = shuffleArray(BUILDING_ITEMS);
        setCorrectTower(shuffled);
        setGameState('preview');
    };

    const handleAddItem = (index) => {
        setSelectedIndex(index);
        setModalVisible(true);
    };

    const handleSelectItem = (item) => {
        if (selectedIndex !== null) {
            const newTower = [...userTower];
            newTower[selectedIndex] = item;
            setUserTower(newTower);
            setModalVisible(false);

            if (newTower.every(slot => slot !== null)) {
                setTimeout(() => finishGame(), 300);
            }
        }
    };

    const finishGame = () => {
        setGameState('finished');
    };

    const handleUndo = () => {
        if (userTower.some(slot => slot !== null)) {
            const lastFilledIndex = userTower.length - 1;
            for (let i = userTower.length - 1; i >= 0; i--) {
                if (userTower[i] !== null) {
                    const newTower = [...userTower];
                    newTower[i] = null;
                    setUserTower(newTower);
                    break;
                }
            }
        }
    };

    const handlePlayAgain = () => {
        setGameState('initial');
        setUserTower(Array(5).fill(null));
        // Shuffle and set both randomTower and correctTower for a new round
        const shuffled = shuffleArray(BUILDING_ITEMS);
        setCorrectTower(shuffled);
        setSelectedIndex(null);
        setModalVisible(false);
    };

    const renderGradientBlock = (item, index) => (
        <View key={index} style={{
            marginVertical: hiet * 0.005, overflow: 'hidden', height: blockSize,
            borderRadius: itemRadius,
            width: blockSize,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <PursheBlurigrantdRaow style={{
                width: blockSize,




                borderRadius: itemRadius,




                height: blockSize,




            }} />
            <View style={{
                height: itemSize,
                overflow: 'hidden',
                borderRadius: itemRadius * 0.8,
                backgroundColor: '#E8D4C4',
                borderColor: '#8B7355',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                zIndex: 1,
                width: itemSize,
            }}>
                <Image
                    source={item.image}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
        </View>
    );

    const renderEmptySlot = (index) => (
        <TouchableOpacity
            onPress={() => handleAddItem(index)}
            key={index}
            style={{
                marginVertical: hiet * 0.01,
                alignItems: 'center',
                height: blockSize,
                borderRadius: itemRadius,
                justifyContent: 'center',
                width: blockSize,
                overflow: 'hidden',
            }}
        >
            <PursheBlurigrantdRaow />
            <Text style={{ fontSize: 48, color: '#fff', fontWeight: 'bold', zIndex: 1 }}>+</Text>
        </TouchableOpacity>
    );

    const renderGradientBlockSmall = (item, index) => (
        <TouchableOpacity
            onPress={() => handleSelectItem(item)} key={item.id} style={{
                height: blockSize * 0.7,
                alignItems: 'center', margin: padding * 0.5, borderRadius: itemRadius, overflow: 'hidden',
                width: blockSize * 0.7,
                justifyContent: 'center',
            }}
        >
            <PursheBlurigrantdRaow style={{ width: blockSize * 0.7, height: blockSize * 0.7, borderRadius: itemRadius, }} />
            <View style={{
                backgroundColor: '#E8D4C4',
                borderColor: '#8B7355',
                height: itemSize * 0.6,
                zIndex: 1,
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: itemRadius * 0.8,
                width: itemSize * 0.6,
            }}>
                <Image
                    source={item.image}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
        </TouchableOpacity>
    );

    const renderComparison = () => {
        return (
            <View style={{
                flexDirection: 'row', flex: 1, paddingHorizontal: widht * 0.08, justifyContent: 'space-around',
                width: '100%',
            }}>
                {/* Correct Tower */}
                <View style={{ alignItems: 'center', }}>
                    {correctTower.map((item, index) => (
                        <View key={item.id} style={{
                            overflow: 'hidden',
                            height: blockSize,
                            width: blockSize,
                            marginBottom: hiet * 0.01,
                            borderRadius: itemRadius,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <PursheBlurigrantdRaow style={{
                            }} />
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#8B7355',
                                width: itemSize * 0.5,
                                borderRadius: itemRadius * 0.8,
                                backgroundColor: '#E8D4C4',
                                zIndex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: itemSize * 0.5,
                                overflow: 'hidden',
                            }}>
                                <Image
                                    source={item.image}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </View>
                        </View>
                    ))}
                </View>

                {/* User Tower with Validation */}
                <View style={{ alignItems: 'center', }}>
                    {userTower.map((item, index) => {
                        const isCorrect = correctTower[index]?.id === item?.id;
                        return (
                            <View key={`user-${index}`} style={{
                                borderRadius: itemRadius,
                                height: blockSize,
                                borderColor: isCorrect ? '#00AA00' : '#FF0000',
                                overflow: 'hidden',
                                alignItems: 'center',
                                borderWidth: 3,
                                width: blockSize,
                                marginBottom: hiet * 0.01,
                                justifyContent: 'center',
                            }}>
                                <PursheBlurigrantdRaow style={{
                                }} />
                                {item && (
                                    <View style={{
                                        borderRadius: itemRadius * 0.8,
                                        height: itemSize * 0.5,
                                        backgroundColor: '#E8D4C4',
                                        borderWidth: 2, zIndex: 1, overflow: 'hidden', width: itemSize * 0.5,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderColor: '#8B7355',
                                    }}>
                                        <Image
                                            source={item.image}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </View>
                                )}
                            </View>
                        );
                    })}
                </View>

                <TouchableOpacity style={{
                    width: widht * 0.5,
                    position: 'absolute',
                    borderRadius: itemRadius,
                    bottom: hiet * 0.05,
                    height: hiet * 0.06,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                }} onPress={handlePlayAgain}>
                    <PursheBlurigrantdRaow />
                    <Text style={{ fontSize: widht * 0.05, color: '#fff', fontWeight: 'bold', zIndex: 1, textAlign: 'center' }} >Play Again</Text>
                </TouchableOpacity>
            </View>
        );
    };

    if (gameState === 'initial') {
        return (
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center',
            }}>
                {/* <PursheBlurigrantdRaow /> */}
                <View style={{
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                }}>
                    <Image source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/gropreuigmae.png')}
                        style={{ width: widht * 1.4, marginTop: hiet * 0.05, height: hiet * 0.4, marginBottom: hiet * 0.05 }} resizeMode='contain'
                    />
                    <TouchableOpacity
                        onPress={startGame}
                        style={{
                            borderRadius: widht * 0.061, alignItems: 'center', marginHorizontal: padding, overflow: 'hidden',
                            justifyContent: 'center', width: widht * 0.847, height: hiet * 0.08,
                            marginTop: - hiet * 0.08,
                        }}
                    >
                        <PursheBlurigrantdRaow />
                        <Text style={{ fontSize: widht * 0.05, fontFamily: tushperlanFinlsRidl.unuMei, color: '#fff', zIndex: 1 }}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    if (gameState === 'preview') {
        return (
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center',
            }}>
                {/* <PursheBlurigrantdRaow /> */}
                <View style={{
                    alignItems: 'center',
                    height: '100%',
                    zIndex: 1,
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <FlatList
                        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}

                        data={correctTower}

                        renderItem={({ item, index }) => renderGradientBlock(item, index)}

                        keyExtractor={(item) => item.id.toString()}

                        scrollEnabled={false}
                    />
                </View>
            </View>
        );
    }

    if (gameState === 'playing') {
        return (
            <View style={{ alignItems: 'center', flex: 1, }}>
                {/* <PursheBlurigrantdRaow /> */}
                <View style={{
                    zIndex: 1,
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <FlatList
                        renderItem={({ item, index }) => (
                            userTower[index] !== null
                                ? renderGradientBlock(userTower[index], index)
                                : renderEmptySlot(index)
                        )}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={Array(5).fill(null)}
                    />
                </View>

                <View style={{
                    marginBottom: hiet * 0.05,
                    flexDirection: 'row',
                    width: widht * 0.9,
                    zIndex: 1,
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity
                        onPress={() => setGameState('initial')} style={{
                            overflow: 'hidden',
                            height: blockSize * 0.8,
                            alignItems: 'center',
                            width: blockSize * 0.8,
                            justifyContent: 'center',
                            borderRadius: itemRadius,
                        }} >
                        <PursheBlurigrantdRaow />
                        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#fff', zIndex: 1 }}>×</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleUndo}
                        style={{
                            borderRadius: itemRadius,
                            overflow: 'hidden',
                            alignItems: 'center',
                            marginHorizontal: padding * 0.5,
                            width: blockSize * 0.8,
                            justifyContent: 'center',
                            height: blockSize * 0.8,
                        }}
                    >
                        <PursheBlurigrantdRaow />
                        <Image 
                            source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/undo.png')}
                            style={{ width: blockSize * 0.4, height: blockSize * 0.4 }}
                        />
                    </TouchableOpacity>
                </View>

                <Modal transparent={true}
                    animationType="slide" visible={modalVisible}>
                    <View style={{
                        justifyContent: 'flex-end',
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}>
                        <View style={{
                            borderTopLeftRadius: itemRadius * 2,
                            backgroundColor: '#2AD1F7',
                            paddingVertical: hiet * 0.03,
                            width: '100%',
                            borderTopRightRadius: itemRadius * 2,
                        }}>
                            <FlatList
                                horizontal={true}
                                renderItem={({ item, index }) => renderGradientBlockSmall(item, index)}
                                data={BUILDING_ITEMS.filter(item => !userTower.some(u => u?.id === item.id))}
                                keyExtractor={(item) => item.id.toString()}
                                contentContainerStyle={{ paddingHorizontal: padding, justifyContent: 'center', }}
                            />
                            <TouchableOpacity onPress={() => setModalVisible(false)}
                                style={{
                                    borderRadius: itemRadius,
                                    marginBottom: hiet * 0.02,
                                    marginTop: padding,
                                    paddingVertical: hiet * 0.02,
                                    overflow: 'hidden',
                                    marginHorizontal: padding,
                                }}
                            >
                                <PursheBlurigrantdRaow />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', zIndex: 1, textAlign: 'center', paddingVertical: hiet * 0.02 }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* <TouchableOpacity style={{
                    width: widht * 0.3,
                    height: hiet * 0.06,
                    bottom: hiet * 0.019,
                    alignSelf: 'flex-start',
                    marginLeft: padding,
                    zIndex: 100,
                    alignItems: 'center',
                    borderRadius: itemRadius,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    position: 'absolute',
                }} onPress={() => setGameState('initial')}>
                    <PursheBlurigrantdRaow />
                    <Text style={{ fontSize: widht * 0.05, color: '#fff', fontWeight: 'bold', zIndex: 1, textAlign: 'center' }}>Exit</Text>
                </TouchableOpacity> */}
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            {/* <PursheBlurigrantdRaow /> */}
            {renderComparison()}
            <View style={{
                zIndex: 1,
                justifyContent: 'space-around',
                width: widht * 0.9,
                marginTop: hiet * 0.05,
                marginBottom: hiet * 0.05,
                flexDirection: 'row',
            }}>
                <TouchableOpacity onPress={handlePlayAgain} style={{
                    height: blockSize * 0.8,
                    overflow: 'hidden',
                    width: blockSize * 0.8,
                    justifyContent: 'center',
                    borderRadius: itemRadius,
                    alignItems: 'center',
                }}
                >
                    <PursheBlurigrantdRaow />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', zIndex: 1 }}>Again</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGameState('initial')}
                    style={{
                        height: blockSize * 0.8,
                        width: blockSize * 0.8,
                        marginHorizontal: padding,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: itemRadius,
                    }}
                >
                    <PursheBlurigrantdRaow />
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#fff', zIndex: 1 }}>×</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
