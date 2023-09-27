import styled from '@emotion/styled'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Preview } from './Preview'
import { AvatarProvider } from './contexts/AvatarContext'
import { ToolContainer } from './ToolContainer'

export function AvatarEditor() {
    return (
        <AvatarProvider>
            <CanvasContainer>
                <Suspense fallback={<p>로딩중...</p>}>
                    <StyledCanvas>
                        <Preview />
                    </StyledCanvas>
                </Suspense>
            </CanvasContainer>
            <ToolContainer />
        </AvatarProvider>
    )
}

const CanvasContainer = styled.div`
    width: 400px;
    height: 600px;
`

const StyledCanvas = styled(Canvas)`
    width: 100%;
    height: 100%;
    background: #f8f8f8;
`
