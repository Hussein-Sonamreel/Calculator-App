"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Calculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".")
    }
  }

  const clear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation: string) => {
    const inputValue = Number.parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue
      case "-":
        return firstValue - secondValue
      case "×":
        return firstValue * secondValue
      case "÷":
        return firstValue / secondValue
      case "=":
        return secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = Number.parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-sm p-6 bg-card shadow-2xl border-border">
        <div className="space-y-4">
          {/* Display */}
          <div className="bg-input rounded-lg p-4 text-right border border-border">
            <div className="text-3xl font-mono font-bold text-foreground overflow-hidden">{display}</div>
          </div>

          {/* Button Grid */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 */}
            <Button
              variant="outline"
              size="lg"
              onClick={clear}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold border-border"
            >
              C
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => performOperation("÷")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold border-border"
            >
              ÷
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => performOperation("×")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold border-border"
            >
              ×
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => performOperation("-")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold row-span-2 border-border"
            >
              -
            </Button>

            {/* Row 2 */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("7")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              7
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("8")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              8
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("9")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              9
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => performOperation("+")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold row-span-2 border-border"
            >
              +
            </Button>

            {/* Row 3 */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("4")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              4
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("5")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              5
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("6")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              6
            </Button>

            {/* Row 4 */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("1")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              1
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("2")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              2
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("3")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              3
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleEquals}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold row-span-2 border-border"
            >
              =
            </Button>

            {/* Row 5 */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => inputNumber("0")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold col-span-2 border-border"
            >
              0
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={inputDecimal}
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold border-border"
            >
              .
            </Button>
          </div>
        </div>
      </Card>

      <footer className="mt-8 text-center">
        <p className="text-muted-foreground text-sm">
          Built with ❤️ by{" "}
          <a
            href="https://github.com/husseinsalim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors underline decoration-dotted underline-offset-4"
          >
            Hussein Salim
          </a>
        </p>
      </footer>
    </div>
  )
}
