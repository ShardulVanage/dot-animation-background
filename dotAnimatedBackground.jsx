"use client"

import React, { useState, useEffect, useCallback } from 'react'

const DOT_SPACING = 24
const ANIMATION_RADIUS = 120
const SCALE_FACTOR = 1.2

interface AnimatedBackgroundProps {
  className?: string
  dotColor?: string
  children?: React.ReactNode
  animationType?: 'convex' | 'concave'
}

export default function AnimatedBackground({ 
  className = "", 
  dotColor = "currentColor", 
  children,
  animationType = 'convex'
}: AnimatedBackgroundProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }, [])

  const renderDots = useCallback(() => {
    const dots = []
    for (let y = 0; y < dimensions.height; y += DOT_SPACING) {
      for (let x = 0; x < dimensions.width; x += DOT_SPACING) {
        const dx = x - mousePos.x
        const dy = y - mousePos.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        let scale = 1
        let translateX = 0
        let translateY = 0
        
        if (distance < ANIMATION_RADIUS) {
          const distanceFactor = 1 - distance / ANIMATION_RADIUS
          
          if (animationType === 'convex') {
            scale = 1 + distanceFactor * SCALE_FACTOR
            translateX = -dx / distance * distanceFactor * ANIMATION_RADIUS * 0.2
            translateY = -dy / distance * distanceFactor * ANIMATION_RADIUS * 0.2
          } else { // concave
            scale = 1 + (ANIMATION_RADIUS - distance) / ANIMATION_RADIUS * SCALE_FACTOR
            translateX = dx / distance * (ANIMATION_RADIUS - distance) * 0.1
            translateY = dy / distance * (ANIMATION_RADIUS - distance) * 0.1
          }
        }
        
        dots.push(
          <g 
            key={`${x}-${y}`} 
            transform={`translate(${x + translateX}, ${y + translateY}) scale(${scale})`}
          >
            <circle
              cx="0"
              cy="0"
              r="1.2"
              fill={dotColor}
              className="opacity-20"
            />
          </g>
        )
      }
    }
    return dots
  }, [dimensions, mousePos, dotColor, animationType])

  return (
    <div className={`relative overflow-hidden ${className}`} onMouseMove={handleMouseMove}>
      <svg 
        width={dimensions.width} 
        height={dimensions.height} 
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 pointer-events-none"
      >
        {renderDots()}
      </svg>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
