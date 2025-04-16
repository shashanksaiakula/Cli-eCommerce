import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function TickTacTo() {
  const [value, setValue] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [win, setWin] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [indexval, setIndexval] = useState(-1);

  const handelDisplay = () => {
    if (value === 'X') {
      setValue('O');
    } else if (value === 'O') {
      setValue('X');
    }
    console.log('board is ' + board);
  };
  useEffect(() => {
    if (indexval !== -1 && board[indexval] === '' && !gameOver) {
      const newBoard = [...board];
      newBoard[indexval] = value;
      setBoard(newBoard);
      checkGameOcer(newBoard);
      handelDisplay();
      setIndexval(-1);
    }
  }, [indexval]);

  function checkGameOcer(board: string[]) {
    if (
      (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') ||
      (board[0] == 'O' && board[1] == 'O' && board[2] == 'O') ||
      (board[3] == 'X' && board[4] == 'X' && board[5] == 'X') ||
      (board[3] == 'O' && board[4] == 'O' && board[5] == 'O') ||
      (board[6] == 'X' && board[7] == 'X' && board[8] == 'X') ||
      (board[6] == 'O' && board[7] == 'O' && board[8] == 'O') ||
      (board[0] == 'X' && board[4] == 'X' && board[8] == 'X') ||
      (board[0] == 'O' && board[4] == 'O' && board[8] == 'O') ||
      (board[2] == 'X' && board[4] == 'X' && board[6] == 'X') ||
      (board[2] == 'O' && board[4] == 'O' && board[6] == 'O') ||
      (board[0] == 'X' && board[3] == 'X' && board[6] == 'X') ||
      (board[0] == 'O' && board[3] == 'O' && board[6] == 'O') ||
      (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') ||
      (board[1] == 'O' && board[4] == 'O' && board[7] == 'O') ||
      (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') ||
      (board[2] == 'O' && board[5] == 'O' && board[8] == 'O')
    ) {
      setWin(value + ' Wins');
      setGameOver(true);
    }
  }

  function onClickDispay(index: number) {
    if (board[index] === '' && !gameOver) {
      setIndexval(index);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handelDisplay}>
        <View style={styles.display}>
          {win !== undefined && win !== '' ? (
            <Text style={styles.textdispay}>{win}</Text>
          ) : (
            <Text style={styles.textdispay}>{value} should play</Text>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.mainview}>
        <View style={styles.rowview}>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(0);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[0]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(1);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[1]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(2);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[2]}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowview}>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(3);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[3]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(4);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[4]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(5);
              setIndexval(5);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[5]}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowview}>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(6);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[6]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(7);
              setIndexval(7);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[7]}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() => {
              onClickDispay(8);
            }}
            disabled={gameOver}>
            <View style={styles.inside}>
              <Text style={styles.textStyle}>{board[8]}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setIndexval(-1);
          setBoard(Array(9).fill(''));
          setValue('X');
          setGameOver(false);
          setWin('');
        }}>
        <View style={styles.display}>
          <Text style={styles.textdispay}>Play again</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  display: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textdispay: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  mainview: {
    height: '50%',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  rowview: {
    height: 105,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Pressable: {
    width: 95,
    height: 90,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  inside: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
