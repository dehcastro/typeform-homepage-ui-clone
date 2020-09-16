import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
    width: 100%;
    height: 200px;
    background: rgba(0 , 0, 0, 0.4);

    position: fixed;
    z-index: 2;
`;
