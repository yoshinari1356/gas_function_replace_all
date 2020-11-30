# gas_function_replace_all

Google Apps Scriptで利用する関数

# REPLACE_ALL
テキスト文字列の複数箇所を別のテキスト文字列に置き換えます。

## 使用例

REPLACE_ALL(B4,$K$4:$L$7)

## 構文

REPLACE_ALL(テキスト, 辞書領域)

テキスト - 一部を置換する対象のテキストです。

辞書領域 - 検索文字列と置換後文字列の組み合わせの一覧の範囲。

## サンプル

| - | A | B |
|---|---|---|
| 1 | redyellowbluegreen | RedYellowBlueGreen |
| 2 |  |  |
| 3 | Yellow | yellow |
| 4 | Green | green |
| 5 | Red | red |
| 6 | Blue | blue |

- A1に対象テキストを入力
- A3:B6に辞書情報を入力
- B1に関数を入力  
=REPLACE_ALL(A1,A3:B6)
- B1に結果が表示される
